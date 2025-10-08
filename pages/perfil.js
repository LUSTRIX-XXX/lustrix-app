export default function Perfil() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Mi <span className="text-purple-500">Perfil</span>
      </h1>
      <p className="text-zinc-400 mb-12 text-center">
        Administra tu cuenta y tus preferencias personales.
      </p>

      <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        {/* Información del usuario */}
        <h2 className="text-2xl font-semibold mb-6 text-purple-400">Información del usuario</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Nombre de usuario</label>
            <input
              type="text"
              value="UsuarioLustrix"
              readOnly
              className="w-full p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email</label>
            <input
              type="email"
              value="usuario@lustrix.tech"
              readOnly
              className="w-full p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Plan actual</label>
            <input
              type="text"
              value="Plan Premium"
              readOnly
              className="w-full p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Fecha de registro</label>
            <input
              type="text"
              value="08/10/2025"
              readOnly
              className="w-full p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
            />
          </div>
        </div>

        {/* Preferencias */}
        <h2 className="text-2xl font-semibold mt-10 mb-6 text-purple-400">Preferencias</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Notificaciones</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-purple-600" />
          </div>
          <div className="flex items-center justify-between">
            <span>Tema oscuro</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-purple-600" />
          </div>
        </div>

        {/* Botones */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
            Actualizar información
          </button>
          <button className="flex-1 py-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
