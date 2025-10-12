import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-purple-400">
        Donde la fantasía cobra vida
      </h1>

      <p className="text-center text-gray-300 mt-4 max-w-2xl">
        LUSTIRX es una plataforma inmersiva impulsada por inteligencia artificial que transforma tus ideas en experiencias visuales únicas. 
        Crea historias personalizadas, genera vídeos realistas y disfruta de una nueva forma de explorar la fantasía con total privacidad y control.
      </p>

      <div className="flex gap-4 mt-10">
        <Link href="/planes">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium">
            Ver planes
          </button>
        </Link>

        <Link href="/crear">
          <button className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium">
            Crear mi historia
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl">
        <div className="bg-zinc-900 p-6 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-2 text-purple-400">
            Historias con IA
          </h2>
          <p className="text-gray-400">
            Relatos únicos y adaptados a tus gustos.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-2 text-purple-400">
            Vídeos personalizados
          </h2>
          <p className="text-gray-400">
            Genera escenas realistas en menos de 60 segundos.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-2 text-purple-400">
            Privacidad
          </h2>
          <p className="text-gray-400">
            Tus datos y creaciones son privados por defecto.
          </p>
        </div>
      </div>

      <footer className="mt-20 text-gray-500 text-sm">
        © 2025 LUSTIRX — Todos los derechos reservados.
      </footer>
    </div>
  );
}
