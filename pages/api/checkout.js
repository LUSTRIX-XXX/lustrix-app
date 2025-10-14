// pages/api/checkout.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // 🔒 Tu clave secreta

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: "price_1SHqoAIqO3JexbpfcfDjf13m", // ✅ Tu price_id real
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/crear?session_id={CHECKOUT_SESSION_ID}`, // Redirige después del pago
        cancel_url: `${req.headers.origin}/planes`, // Si cancela, vuelve a Planes
      });

      res.status(200).json({ url: session.url });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
