export async function onRequestDelete(context) {
  const { env, params } = context;
  
  try {
    // Hapus episode berdasarkan ID
    await env.DB.prepare("DELETE FROM episodes WHERE id = ?").bind(params.id).run();
    return Response.json({ success: true, message: "Episode berhasil dihapus!" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
