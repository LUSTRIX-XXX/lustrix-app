import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { priceId } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: "https://app.lustrix.tech/crear?success=true",
      cancel_url: "https://app.lustrix.tech/planes?cancel=true",
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Error en Stripe Checkout:", error);
    res.status(500).json({ error: "Error al crear sesión de pago" });
  }
}
