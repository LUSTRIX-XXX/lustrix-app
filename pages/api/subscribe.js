import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email requerido" });
  }

  try {
    await sendgrid.send({
      to: process.env.SENDGRID_FROM,
      from: process.env.SENDGRID_FROM,
      subject: "Nuevo suscriptor en LUSTRIX 💜",
      text: `Se ha registrado un nuevo usuario con email: ${email}`,
    });

    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al enviar correo", error });
  }
}
