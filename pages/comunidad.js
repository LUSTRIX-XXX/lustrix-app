import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Comunidad() {
  const [historias, setHistorias] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    cargarHistorias();
  }, []);

  const cargarHistorias = async () => {
    const { data, error } = await supabase
      .from("stories")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setHistorias(data);
  };

  const publicarHistoria = async () => {
    if (!titulo || !contenido) {
      alert("Por favor escribe un título y una historia antes de publicar.");
      return;
    }

    const { error } = await supabase.from("stories").insert([
      {
        title: titulo,
        content: contenido,
        is_public: true,
        user_id: usuario || "anon",
      },
    ]);

    if (error) {
      console.error(error);
      alert("Hubo un error al publicar.");
    } else {
      alert("Historia publicada con éxito 🎉");
      setTitulo("");
      setContenido("");
      cargarHistorias();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-500">
        Comunidad LUSTRIX 💫
      </h1>

      <div className="max-w-3xl mx-auto bg-zinc-900 p-6 rounded-xl mb-10">
        <h2 className="text-2xl font-semibold mb-4">Publicar nueva historia</h2>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título de la historia"
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
        />
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          placeholder="Escribe tu historia aquí..."
          className="w-full p-3 h-40 rounded bg-zinc-800 text-white mb-4"
        />
        <button
          onClick={publicarHistoria}
          className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Publicar historia
        </button>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Historias publicadas</h2>
        {historias.length === 0 ? (
          <p className="text-gray-400 text-center">Aún no hay historias publicadas.</p>
        ) : (
          <div className="space-y-6">
            {historias.map((historia) => (
              <div key={historia.id} className="bg-zinc-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-400 mb-2">{historia.title}</h3>
                <p className="text-gray-300 whitespace-pre-wrap">{historia.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
