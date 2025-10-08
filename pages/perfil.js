import { useSession, signIn, signOut } from "next-auth/react";

export default function Perfil() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold mb-6">
          Inicia sesión en <span className="text-purple-500">LUSTRIX</span>
        </h1>
        <p className="text-zinc-400 mb-8">
          Accede a tu perfil para gestionar tu cuenta y tus preferencias.
        </p>
        <button
          onClick={() => signIn("google")}
          className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Iniciar sesión con Google
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Mi <span className="text-purple-500">Perfil</span>
      </h1>
      <p className="text-zinc-400 mb-12 text-center">
        Bienvenido, {session.user.name}.
      </p>

      <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg w-full max-w-3xl text-center">
        <img
          src={session.user.image}
          alt="Foto de perfil"
          className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-purple-500"
        />

        <div className="space-y-4 text-left">
          <div>
            <p className="text-sm text-zinc-400">Nombre</p>
            <p className="text-lg font-semibold">{session.user.name}</p>
          </div>
          <div>
            <p className="text-sm text-zinc-400">Correo electrónico</p>
            <p className="text-lg font-semibold">{session.user.email}</p>
          </div>
          <div>
            <p className="text-sm text-zinc-400">Plan actual</p>
            <p className="text-lg font-semibold text-purple-500">Plan Premium</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
            Actualizar información
          </button>
          <button
            onClick={() => signOut()}
            className="flex-1 py-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
