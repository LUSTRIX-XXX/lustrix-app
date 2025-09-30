import { useState } from 'react';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, mensaje }),
      });
      if (res.ok) {
        window.location.href = '/gracias';
      } else {
        alert('Error al enviar.');
      }
    } catch (err) {
      console.error(err);
      alert('Error inesperado.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-zinc-900 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Registro</h2>
        <input value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Nombre" required className="w-full p-2 mb-3 rounded bg-zinc-800"/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" required className="w-full p-2 mb-3 rounded bg-zinc-800"/>
        <textarea value={mensaje} onChange={(e)=>setMensaje(e.target.value)} placeholder="Mensaje" className="w-full p-2 mb-3 rounded bg-zinc-800"></textarea>
        <button disabled={loading} className="w-full py-2 bg-purple-600 rounded">{loading? 'Enviando...':'Enviar'}</button>
      </form>
    </div>
  );
}
