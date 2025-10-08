import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) return alert("Por favor, completa todos los campos.");
    setEnviado(true);

    // Reset form (solo simulación visual)
    setTimeout(() => {
      setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
      setEnviado(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      {/* Encabezado */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Contáctanos en <span className="text-purple-500">LUSTRIX</span>
      </h1>
      <p className="text-zinc-400 mb-12 text-center max-w-2xl">
        ¿Tienes alguna duda, propuesta o colaboración? Estamos aquí para escucharte. 
        Tu mensaje viaja directo a nuestro universo digital.
      </p>

      {/* Formulario */}
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        {enviado ? (
          <div className="flex flex-col items-center justify-center py-12">
            <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">¡Mensaje enviado!</h2>
            <p className="text-zinc-400 text-center max-w-md">
              Gracias por contactarnos. Nos pondremos en contacto contigo muy pronto 💜
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
                className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                value={form.email}
                onChange={handleChange}
                className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <input
              type="text"
              name="asunto"
              placeholder="Asunto (opcional)"
              value={form.asunto}
              onChange={handleChange}
              className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              value={form.mensaje}
              onChange={handleChange}
              rows="6"
              className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition flex justify-center items-center gap-2"
            >
              <Send className="w-5 h-5" /> Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
