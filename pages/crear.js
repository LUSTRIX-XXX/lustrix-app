import { useState } from 'react';

export default function Crear() {
  const [text, setText] = useState('');
  const [generando, setGenerando] = useState(false);

  const generar = async () => {
    if(!text) return alert('Escribe una historia');
    setGenerando(true);
    // MVP: aquí se llamaría a la API de generación de vídeo
    setTimeout(()=>{
      setGenerando(false);
      alert('Vídeo generado (demo).');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Crear tu historia</h2>
        <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder="Escribe tu historia erótica aquí (máx 500 palabras)" className="w-full p-3 mb-4 rounded bg-zinc-900 h-48"></textarea>
        <div className="flex gap-4">
          <button onClick={generar} className="px-6 py-2 bg-purple-600 rounded" disabled={generando}>{generando?'Generando...':'Generar vídeo (demo)'}</button>
          <button className="px-6 py-2 border rounded">Guardar borrador</button>
        </div>
      </div>
    </div>
  );
}
