export async function onRequestGet(context) {
  const { env } = context;
  // Ambil data episode sekalian bawa nama animenya
  const query = `
    SELECT episodes.*, animes.title as anime_title 
    FROM episodes 
    LEFT JOIN animes ON episodes.anime_id = animes.id 
    ORDER BY episodes.created_at DESC
  `;
  const { results } = await env.DB.prepare(query).all();
  return Response.json(results);
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const data = await request.json();
  
  try {
    // Simpan episode baru ke database
    await env.DB.prepare(
      "INSERT INTO episodes (anime_id, episode_number, episode_title, embed_url) VALUES (?, ?, ?, ?)"
    ).bind(data.anime_id, data.episode_number, data.episode_title, data.embed_url).run();
    
    return Response.json({ success: true, message: "Episode berhasil disimpan!" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
