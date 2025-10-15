import { CheckCircle, XCircle } from "lucide-react";

export default function Planes() {
  const handlePagoPremium = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priceId: "price_1SHqoAIqO3JexbpfcfDjf13m", // ⚡ Tu Price ID de Stripe
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Error al iniciar el pago.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Elige tu plan en <span className="text-purple-500">LUSTRIX</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Plan Gratis */}
        <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Empezar Gratis</h2>
          <p className="text-xl font-bold text-purple-500 mb-6">0 €/mes</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-400" /> Acceso básico a historias con IA
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-400" /> Generar vídeos de hasta 60s
            </li>
            <li className="flex items-center gap-2">
              <XCircle className="text-gray-500" /> Escenas personalizadas ilimitadas
            </li>
            <li className="flex items-center gap-2">
              <XCircle className="text-gray-500" /> Prioridad en soporte
            </li>
          </ul>
          <button
            onClick={() => {
              localStorage.setItem("planActivo", "gratis");
              window.location.href = "/crear";
            }}
            className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            Elegir Plan Gratis
          </button>
        </div>

        {/* Plan Premium */}
        <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Plan Premium</h2>
          <p className="text-xl font-bold text-purple-500 mb-6">19,99 €/mes</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-400" /> Acceso completo a historias con IA
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-400" /> Generar vídeos de hasta 15 min
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-400" /> Escenas personalizadas ilimitadas
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-400" /> Prioridad en soporte
            </li>
          </ul>
          <button
            onClick={handlePagoPremium}
            className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            Elegir Plan Premium
          </button>
        </div>
      </div>
    </div>
  );
}
