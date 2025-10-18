import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Comunidad() {
  const [historias, setHistorias] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [autor, setAutor] = useState("");

  useEffect(() => {
    obtenerHistorias();
  }, []);

  async function obtenerHistorias() {
    const { data, error } = await supabase.from("historias").select("*").order("id", { ascending: false });
    if (!error) setHistorias(data);
  }

  async function publicarHistoria(e) {
    e.preventDefault();
    if (!titulo || !contenido || !autor) {
      alert("Por favor, rellena todos los campos antes de publicar.");
      return;
    }
    const { error } = await supabase.from("historias").insert([{ titulo, contenido, autor }]);
    if (error) {
      alert("Error al publicar la historia.");
    } else {
      setTitulo("");
      setContenido("");
      setAutor("");
      obtenerHistorias();
      alert("Historia publicada correctamente.");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-500">Comunidad LUSTRIX</h1>

      <form onSubmit={publicarHistoria} className="w-full max-w-2xl bg-zinc-900 p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl mb-4">Publicar una nueva historia</h2>
        <input
          type="text"
          placeholder="Tu nombre o alias"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-zinc-800 text-white"
        />
        <input
          type="text"
          placeholder="Título de la historia"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-zinc-800 text-white"
        />
        <textarea
          placeholder="Escribe tu historia aquí..."
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          className="w-full p-3 h-40 rounded bg-zinc-800 text-white resize-none mb-4"
        />
        <button type="submit" className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700">
          Publicar historia
        </button>
      </form>

      <div className="w-full max-w-3xl space-y-6">
        {historias.length === 0 ? (
          <p className="text-gray-400 text-center">Aún no hay historias publicadas.</p>
        ) : (
          historias.map((h) => (
            <div key={h.id} className="bg-zinc-900 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{h.titulo}</h3>
              <p className="text-gray-400 text-sm mb-4">por {h.autor}</p>
              <p className="text-gray-200">{h.contenido}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
