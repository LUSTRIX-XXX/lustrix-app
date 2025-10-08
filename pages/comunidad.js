import Image from "next/image";

export default function Comunidad() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      {/* Encabezado */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Comunidad <span className="text-purple-500">LUSTRIX</span>
      </h1>
      <p className="text-zinc-400 mb-12 text-center max-w-2xl">
        Comparte tus ideas, conecta con otros y descubre nuevas fantasías generadas por IA. 
        Únete a la comunidad más creativa del universo LUSTRIX.
      </p>

      {/* Publicaciones destacadas */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        {/* Tarjeta 1 */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
            alt="Publicación comunidad"
            width={800}
            height={500}
            className="object-cover w-full h-48"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Historia: “Sueños en la Nube”</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Creada por <span className="text-purple-500">@LunaAI</span>
            </p>
            <p className="text-sm text-zinc-300">
              “Explora un viaje emocional entre humanos y máquinas. Una historia llena de deseo e inteligencia artificial.”
            </p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="https://images.unsplash.com/photo-1604079628040-94301bb21b85?auto=format&fit=crop&w=800&q=80"
            alt="Publicación comunidad"
            width={800}
            height={500}
            className="object-cover w-full h-48"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Relato: “El Jardín Digital”</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Creado por <span className="text-purple-500">@NeoDreamer</span>
            </p>
            <p className="text-sm text-zinc-300">
              “Una historia inmersiva sobre mundos virtuales donde las emociones cobran vida.”
            </p>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
          <Image
            src="https://images.unsplash.com/photo-1558980394-0c8e5f0b3a12?auto=format&fit=crop&w=800&q=80"
            alt="Publicación comunidad"
            width={800}
            height={500}
            className="object-cover w-full h-48"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Colección: “Sombras de Silicio”</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Creado por <span className="text-purple-500">@DigitalSoul</span>
            </p>
            <p className="text-sm text-zinc-300">
              “Una serie de microhistorias visuales creadas por la IA más atrevida de LUSTRIX.”
            </p>
          </div>
        </div>
      </div>

      {/* Sección Participa */}
      <div className="bg-zinc-900 p-10 rounded-2xl text-center w-full max-w-3xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Participa en la comunidad</h2>
        <p className="text-zinc-400 mb-6">
          Comparte tus propias historias, ideas o ilustraciones generadas con IA. Sé parte de la evolución.
        </p>
        <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
          Publicar contenido
        </button>
      </div>
    </div>
  );
}
