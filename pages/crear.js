import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function CrearHistoria() {
  const [historia, setHistoria] = useState("");
  const [yaGenerada, setYaGenerada] = useState(false);
  const router = useRouter();

  // Al cargar la página, comprobamos si el usuario ya generó una historia
  useEffect(() => {
    const generada = localStorage.getItem("historiaGenerada");
    if (generada) setYaGenerada(true);
  }, []);

  // ⚙️ Función para resetear el estado (solo modo desarrollador)
  const resetHistoria = () => {
    localStorage.removeItem("historiaGenerada");
    alert("✅ Estado reiniciado: ahora puedes volver a crear historias.");
    router.reload();
  };

  // Guardar historia como archivo .txt descargable
  const guardarBorrador = () => {
    if (!historia.trim()) {
      alert("Escribe una historia antes de guardarla 📝");
      return;
    }

    const blob = new Blob([historia], { type: "text/plain;charset=utf-8" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "mi-historia-lustrix.txt";
    enlace.click();
  };

  // Generar video (modo demo)
  const generarVideo = () => {
    if (!historia.trim()) {
      alert("Por favor escribe tu historia antes de generar el video 💡");
      return;
    }

    // Guardamos en localStorage para recordar que ya generó una historia
    localStorage.setItem("historiaGenerada", "true");
    alert("🎬 Tu historia se está procesando (modo demo)");

    // Si el usuario no tiene plan activo, lo enviamos a los planes
    const tienePlan = localStorage.getItem("planActivo");
    if (!tienePlan) {
      router.push("/planes");
    }
  };

  // Si el usuario ya generó una historia, mostramos aviso
  if (yaGenerada) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold text-purple-500 mb-6">
          Ya has creado tu historia ✨
        </h1>
        <p className="mb-8 text-gray-300">
          Para crear más historias, elige un plan Premium.
        </p>
        <button
          onClick={() => router.push("/planes")}
          className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Ver planes
        </button>

        {/* Botón oculto de desarrollo */}
        <button
          onClick={resetHistoria}
          className="mt-6 text-sm text-gray-400 hover:text-red-400"
        >
          🔄 Reset historia (solo admin)
        </button>
      </div>
    );
  }

  // Pantalla normal para crear historia
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Crear tu historia</h1>

      <textarea
        value={historia}
        onChange={(e) => setHistoria(e.target.value)}
        placeholder="Escribe tu historia erótica aquí (máx 500 palabras)"
        maxLength={3000}
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

      {/* Botón fijo de desarrollo (solo tú lo ves) */}
      <button
        onClick={resetHistoria}
        className="fixed bottom-6 right-6 px-3 py-2 bg-red-700 hover:bg-red-800 text-sm rounded-lg"
      >
        🔄 Reset historia
      </button>
    </div>
  );
}
