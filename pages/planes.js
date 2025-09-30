export default function Planes() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Elige tu plan en <span className="text-purple-500">LUSTRIX</span></h1>
      <div className="flex flex-col md:flex-row gap-6">
        <button className="px-8 py-4 bg-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">Empezar Gratis</button>
        <button className="px-8 py-4 border-2 border-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">Plan Premium</button>
      </div>
    </div>
  );
}
