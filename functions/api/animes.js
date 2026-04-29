export async function onRequestGet(context) {
  const { env } = context;
  // Ambil semua data anime, urutkan dari yang terbaru
  const { results } = await env.DB.prepare("SELECT * FROM animes ORDER BY created_at DESC").all();
  return Response.json(results);
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const data = await request.json();
  
  try {
    // Simpan anime baru ke database
    await env.DB.prepare(
      "INSERT INTO animes (title, poster_url, type, status) VALUES (?, ?, ?, ?)"
    ).bind(data.title, data.poster_url, data.type, data.status).run();
    
    return Response.json({ success: true, message: "Anime berhasil disimpan!" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
