import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, email, mensaje } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email requerido' });
  }

  try {
    // Enviar mail al usuario
    await sgMail.send({
      to: email,
      from: process.env.FROM_EMAIL || 'info@lustrix.tech',
      subject: 'Bienvenido a LUSTRIX',
      html: `<h1>¡Bienvenido ${nombre || ''}!</h1><p>Accede a la app: <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://app.lustrix.tech'}">Entrar a la app</a></p>`
    });

    // Notificación interna
    await sgMail.send({
      to: process.env.FROM_EMAIL || 'info@lustrix.tech',
      from: process.env.FROM_EMAIL || 'info@lustrix.tech',
      subject: 'Nuevo registro en landing',
      html: `<p>Nombre: ${nombre}</p><p>Email: ${email}</p><p>Mensaje: ${mensaje}</p>`
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('SendGrid error', error);
    return res.status(500).json({ error: 'Error enviando emails' });
  }
}
