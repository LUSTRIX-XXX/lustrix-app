import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="flex items-center justify-between px-8 py-4 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Lustrix" className="w-10 h-10"/>
          <div className="text-xl font-bold text-purple-400">LUSTRIX</div>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="/perfil">Perfil</Link>
          <Link href="/planes">Planes</Link>
          <Link href="/comunidad">Comunidad</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Donde la fantasía cobra vida
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-zinc-300 mb-8">
          LUSTRIX es una plataforma interactiva erótica impulsada por IA. Crea historias,
          personaliza escenas y genera vídeos de hasta 60s. Privada, segura y hecha a tu medida.
        </p>

        <div className="flex gap-4">
          <Link href="/planes">
            <a className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 font-semibold">Ver planes</a>
          </Link>
          <Link href="/crear">
            <a className="px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-800 font-semibold">Crear mi historia</a>
          </Link>
        </div>
      </main>

      <section id="planes" className="px-8 py-16 bg-zinc-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-800 rounded-xl shadow-lg hover:shadow-purple-500/20 transition">
            <h3 className="text-xl font-bold mb-2">Historias con IA</h3>
            <p className="text-zinc-400">Relatos únicos y adaptados a tus gustos.</p>
          </div>
          <div className="p-6 bg-zinc-800 rounded-xl shadow-lg hover:shadow-purple-500/20 transition">
            <h3 className="text-xl font-bold mb-2">Vídeos personalizados</h3>
            <p className="text-zinc-400">Genera escenas realistas en menos de 60 segundos.</p>
          </div>
          <div className="p-6 bg-zinc-800 rounded-xl shadow-lg hover:shadow-purple-500/20 transition">
            <h3 className="text-xl font-bold mb-2">Privacidad</h3>
            <p className="text-zinc-400">Tus datos y creaciones son privados por defecto.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-zinc-500 border-t border-zinc-800">
        © {new Date().getFullYear()} LUSTRIX — Todos los derechos reservados.
      </footer>
    </div>
  );
}
