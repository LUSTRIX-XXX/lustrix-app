import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: "price_1SHqoAIqO3JexbpfcfDjf13m", // tu ID de Stripe
          quantity: 1,
        },
      ],
      success_url: "https://app.lustrix.tech/crear",
      cancel_url: "https://app.lustrix.tech/planes",
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("❌ Error en Stripe:", error);
    res.status(500).json({ error: error.message });
  }
}
