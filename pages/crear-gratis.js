import { useState } from "react";

export default function CrearGratis() {
  const [historia, setHistoria] = useState("");

  const guardarBorrador = () => {
    if (!historia.trim()) {
      alert("✍️ Escribe una historia antes de guardarla.");
      return;
    }
    const blob = new Blob([historia], { type: "text/plain;charset=utf-8" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "mi-historia-lustrix.txt";
    enlace.click();
  };

  const generarVideo = () => {
    if (!historia.trim()) {
      alert("💡 Escribe tu historia antes de generar el video.");
      return;
    }
    alert("🎬 Tu historia de 60 segundos se está procesando (modo demo).");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Crear tu historia (Plan Gratis)
      </h1>

      <textarea
        value={historia}
        onChange={(e) => setHistoria(e.target.value)}
        placeholder="Escribe tu historia erótica aquí (máx 500 palabras)"
        maxLength={500}
        className="w-full max-w-2xl h-64 p-4 rounded-lg bg-zinc-900 text-white resize-none mb-6"
      />

      <div className="flex gap-4">
        <button
          onClick={generarVideo}
          className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Generar video (demo)
        </button>
        <button
          onClick={guardarBorrador}
          className="px-6 py-3 bg-transparent border border-purple-500 rounded-lg hover:bg-purple-900 transition"
        >
          Guardar borrador
        </button>
      </div>
    </div>
  );
}
