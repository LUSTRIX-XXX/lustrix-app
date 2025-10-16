import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function CrearHistoria() {
  const [historia, setHistoria] = useState("");
  const [yaGenerada, setYaGenerada] = useState(false);
  const [plan, setPlan] = useState("gratis");
  const router = useRouter();
  const adminEmail = "info@lustrix.tech";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const generada = localStorage.getItem("historiaGenerada");
      const planActivo = localStorage.getItem("planActivo") || "gratis";
      const usuarioEmail = localStorage.getItem("usuarioEmail") || "";
      if (generada && usuarioEmail !== adminEmail) setYaGenerada(true);
      setPlan(planActivo);
    }
  }, []);

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
    if (typeof window !== "undefined") {
      const usuarioEmail = localStorage.getItem("usuarioEmail") || "";
      if (usuarioEmail !== adminEmail) localStorage.setItem("historiaGenerada", "true");
    }
    const duracion = plan === "premium" ? "15 minutos" : "60 segundos";
    alert(`🎬 Tu historia se está procesando (duración máxima: ${duracion}).`);
    if (plan === "gratis") {
      setTimeout(() => router.push("/planes"), 2500);
    }
  };

  if (yaGenerada) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold text-purple-500 mb-6">Ya has creado tu historia ✨</h1>
        <p className="mb-8 text-gray-300">
          Para crear más historias y acceder a más minutos, elige un plan premium.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/planes")}
            className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Ver planes
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("historiaGenerada");
              router.reload();
            }}
            className="px-6 py-3 bg-transparent border border-purple-500 rounded-lg hover:bg-purple-900 transition"
          >
            Crear otra historia
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Crear tu historia {plan === "premium" ? "✨ (Plan Premium)" : ""}
      </h1>
      <textarea
        value={historia}
        onChange={(e) => setHistoria(e.target.value)}
        placeholder={`Escribe tu historia aquí (máx ${
          plan === "premium" ? "3000" : "500"
        } palabras)`}
        maxLength={plan === "premium" ? 3000 : 500}
        className="w-full max-w-2xl h-64 p-4 rounded-lg bg-zinc-900 text-white resize-none mb-6"
      />
      <div className="flex gap-4">
        <button
          onClick={generarVideo}
          className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Generar video
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
