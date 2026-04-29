export async function onRequestDelete(context) {
  const { env, params } = context;
  
  try {
    // Hapus anime berdasarkan ID-nya
    await env.DB.prepare("DELETE FROM animes WHERE id = ?").bind(params.id).run();
    return Response.json({ success: true, message: "Anime berhasil dihapus!" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
