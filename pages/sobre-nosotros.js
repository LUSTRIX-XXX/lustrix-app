"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SobreNosotros() {
  // 🖼️ Carrusel de imágenes
  const images = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
    "https://images.unsplash.com/photo-1604079628040-94303b87a9f0?q=80&w=1200",
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      {/* TITULO */}
      <h1 className="text-5xl font-bold mb-6 text-center text-purple-400">
        Nuestra historia
      </h1>
      <p className="text-lg text-gray-300 max-w-3xl text-center mb-12">
        LUSTRIX nació para fusionar inteligencia artificial y creatividad humana,
        creando experiencias donde la fantasía cobra vida. Nuestro objetivo es
        ofrecer un espacio único, privado y tecnológicamente avanzado para
        impulsar la imaginación.
      </p>

      {/* CARRUSEL */}
      <div className="relative w-full max-w-4xl h-64 md:h-80 rounded-2xl overflow-hidden mb-16">
        <Image
          src={images[index]}
          alt="Imagen inspiradora LUSTRIX"
          layout="fill"
          objectFit="cover"
          className="transition-all duration-1000 opacity-80"
        />
      </div>

      {/* VALORES */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mb-20">
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-purple-400 mb-3">
            Innovación
          </h3>
          <p className="text-gray-400">
            Creamos tecnología de vanguardia para transformar la imaginación en experiencias visuales reales.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-purple-400 mb-3">
            Privacidad
          </h3>
          <p className="text-gray-400">
            La seguridad de tus creaciones es nuestra prioridad. Todo lo que haces en LUSTRIX es confidencial y protegido.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-purple-400 mb-3">
            Comunidad
          </h3>
          <p className="text-gray-400">
            Somos una comunidad de creadores, soñadores y exploradores digitales. Comparte, aprende y evoluciona con nosotros.
          </p>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Únete a la experiencia{" "}
          <span className="text-purple-500">LUSTRIX</span>
        </h2>
        <a
          href="/comunidad"
          className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Explorar Comunidad
        </a>
      </div>
    </div>
  );
}
