import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { usuario_id, titulo, contenido, tipo } = req.body;

    const { data, error } = await supabase
      .from("historias")
      .insert([{ usuario_id, titulo, contenido, tipo }])
      .select();

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ data });
  }

  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("historias")
      .select("id, titulo, contenido, tipo, likes, created_at");

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ data });
  }

  if (req.method === "PUT") {
    const { id } = req.body;
    const { error } = await supabase
      .from("historias")
      .update({ likes: supabase.raw("likes + 1") })
      .eq("id", id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: "Like añadido" });
  }
}
