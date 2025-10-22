import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Comunidad() {
  const [historias, setHistorias] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [tipo, setTipo] = useState("ia");
  const [usuarioId, setUsuarioId] = useState("demo-user");

  useEffect(() => {
    cargarHistorias();
  }, []);

  async function cargarHistorias() {
    const res = await fetch("/api/historias");
    const data = await res.json();
    setHistorias(data.data || []);
  }

  async function publicarHistoria() {
    if (!titulo || !contenido) {
      alert("Completa todos los campos");
      return;
    }

    const res = await fetch("/api/historias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario_id: usuarioId, titulo, contenido, tipo }),
    });

    if (res.ok) {
      setTitulo("");
      setContenido("");
      cargarHistorias();
    } else {
      alert("Error al publicar");
    }
  }

  async function darLike(id) {
    await fetch("/api/historias", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    cargarHistorias();
  }

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      <h1 className="text-4xl font-bold text-purple-500 mb-8 text-center">
        Comunidad LUSTRIX
      </h1>

      <div className="max-w-3xl mx-auto mb-10 bg-zinc-900 p-6 rounded-lg">
        <h2 className="text-2xl mb-4">Publicar una historia</h2>

        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full mb-3 p-2 rounded bg-zinc-800"
        />
        <textarea
          placeholder="Escribe o genera tu historia..."
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          className="w-full h-40 p-2 rounded bg-zinc-800 mb-3"
        />
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full mb-3 p-2 rounded bg-zinc-800"
        >
          <option value="ia">Generada por IA</option>
          <option value="propia">Historia propia</option>
        </select>

        <button
          onClick={publicarHistoria}
          className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Publicar historia
        </button>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {historias.map((h) => (
          <div
            key={h.id}
            className="bg-zinc-900 p-6 rounded-lg border border-zinc-700"
          >
            <h3 className="text-xl font-semibold text-purple-400">{h.titulo}</h3>
            <p className="text-gray-300 mt-2">{h.contenido}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">
                {h.tipo === "ia" ? "✨ Historia generada por IA" : "🖋️ Propia"}
              </span>
              <button
                onClick={() => darLike(h.id)}
                className="text-purple-500 hover:text-purple-300"
              >
                ❤️ {h.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
