import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
            L
          </div>
          <span className="text-lg font-semibold">LUSTRIX</span>
        </div>
        <nav className="flex gap-6">
          <Link href="/perfil" className="hover:text-purple-400">
            Perfil
          </Link>
          <Link href="/planes" className="hover:text-purple-400">
            Planes
          </Link>
          <Link href="/comunidad" className="hover:text-purple-400">
            Comunidad
          </Link>
          <Link href="/contacto" className="hover:text-purple-400">
            Contacto
          </Link>
          <Link href="/sobre-nosotros" className="hover:text-purple-400">
            Sobre Nosotros
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Donde la fantasía cobra vida
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-10">
          <strong>LUSTRIX</strong> es una plataforma inmersiva impulda por IA que transforma tus ideas en experiencias visuales únicas. Crea historias personalizadas, genera vídeos realistas y disfruta de una nueva forma de explorar la fantasía con total privacidad y control.     
        </p>

        <div className="flex gap-4">
          <Link href="/planes">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
              Ver planes
            </button>
          </Link>
          <Link href="/crear">
            <button className="bg-zinc-800 text-white px-6 py-3 rounded-lg border border-purple-600 hover:bg-purple-700 transition">
              Crear mi historia
            </button>
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-zinc-900 py-16 px-6 grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">Historias con IA</h3>
          <p className="text-gray-300">
            Relatos únicos y adaptados a tus gustos con inteligencia artificial.
          </p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">Vídeos personalizados</h3>
          <p className="text-gray-300">
            Genera escenas realistas en menos de 60 segundos, hechas a tu medida.
          </p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">Privacidad</h3>
          <p className="text-gray-300">
            Tus datos y creaciones son completamente privados y seguros por defecto.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 border-t border-zinc-800">
        © 2025 <span className="text-purple-400 font-semibold">LUSTRIX</span> — Todos los derechos reservados.
      </footer>
    </div>
  );
}
