import Image from "next/image";
import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";

export default function Comunidad() {
  // Estado simulado de publicaciones
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "@LunaAI",
      title: "Sueños en la Nube ☁️",
      description:
        "Explora un viaje emocional entre humanos y máquinas. Una historia llena de deseo e inteligencia artificial.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
      likes: 128,
      comments: 9,
    },
    {
      id: 2,
      user: "@NeoDreamer",
      title: "El Jardín Digital 🌿",
      description:
        "Una historia inmersiva sobre mundos virtuales donde las emociones cobran vida.",
      image:
        "https://images.unsplash.com/photo-1604079628040-94301bb21b85?auto=format&fit=crop&w=800&q=80",
      likes: 94,
      comments: 4,
    },
    {
      id: 3,
      user: "@DigitalSoul",
      title: "Sombras de Silicio 💫",
      description:
        "Serie de microhistorias visuales creadas por la IA más atrevida de LUSTRIX.",
      image:
        "https://images.unsplash.com/photo-1558980394-0c8e5f0b3a12?auto=format&fit=crop&w=800&q=80",
      likes: 152,
      comments: 12,
    },
  ]);

  // Estado del formulario
  const [newPost, setNewPost] = useState({ title: "", description: "", image: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.description) return;

    const post = {
      id: posts.length + 1,
      user: "@UsuarioNuevo",
      title: newPost.title,
      description: newPost.description,
      image:
        newPost.image ||
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      likes: 0,
      comments: 0,
    };

    setPosts([post, ...posts]);
    setNewPost({ title: "", description: "", image: "" });
  };

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

      {/* Formulario para publicar */}
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg w-full max-w-3xl mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Publicar nuevo contenido</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Título de la publicación"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Descripción o historia..."
            value={newPost.description}
            onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
            className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="url"
            placeholder="URL de imagen (opcional)"
            value={newPost.image}
            onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
            className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition flex justify-center items-center gap-2"
          >
            <Send className="w-5 h-5" /> Publicar
          </button>
        </form>
      </div>

      {/* Feed de publicaciones */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={500}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-zinc-400 text-sm mb-2">Creado por {post.user}</p>
                <p className="text-sm text-zinc-300 mb-4">{post.description}</p>
              </div>

              <div className="flex items-center justify-between text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-purple-500" /> {post.likes}
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-zinc-400" /> {post.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
