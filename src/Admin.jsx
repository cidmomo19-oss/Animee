import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, LayoutDashboard, Film, Loader2 } from 'lucide-react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('anime');
  const [loading, setLoading] = useState(false);
  
  // State untuk data dari Database
  const [animes, setAnimes] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  // State untuk Form Anime
  const [animeForm, setAnimeForm] = useState({ title: '', poster_url: '', type: 'TV', status: 'Ongoing' });
  
  // State untuk Form Episode
  const [epForm, setEpForm] = useState({ anime_id: '', episode_number: '', episode_title: '', embed_url: '' });

  // 1. Fungsi Ambil Data
  const fetchData = async () => {
    const resAni = await fetch('/api/animes');
    const dataAni = await resAni.json();
    setAnimes(dataAni);

    const resEp = await fetch('/api/episodes');
    const dataEp = await resEp.json();
    setEpisodes(dataEp);
  };

  useEffect(() => { fetchData(); }, []);

  // 2. Fungsi Tambah Anime
  const handleAddAnime = async () => {
    if (!animeForm.title) return alert("Judul wajib diisi!");
    setLoading(true);
    await fetch('/api/animes', {
      method: 'POST',
      body: JSON.stringify(animeForm)
    });
    setAnimeForm({ title: '', poster_url: '', type: 'TV', status: 'Ongoing' });
    fetchData();
    setLoading(false);
  };

  // 3. Fungsi Tambah Episode
  const handleAddEpisode = async () => {
    if (!epForm.anime_id || !epForm.embed_url) return alert("Isi semua data!");
    setLoading(true);
    await fetch('/api/episodes', {
      method: 'POST',
      body: JSON.stringify(epForm)
    });
    setEpForm({ anime_id: '', episode_number: '', episode_title: '', embed_url: '' });
    fetchData();
    setLoading(false);
  };

  // 4. Fungsi Hapus
  const handleDelete = async (type, id) => {
    if (!confirm("Yakin mau hapus bang?")) return;
    await fetch(`/api/${type}/${id}`, { method: 'DELETE' });
    fetchData();
  };

  return (
    <div className="min-h-screen bg-[#0b1120] p-4 md:p-8 font-sans text-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-8 bg-indigo-600/10 border border-indigo-500/20 p-6 rounded-[2.5rem]">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl font-black text-white italic">ADMIN PANEL</h1>
            <p className="text-indigo-300 mt-1 text-sm font-medium">Update pameran anime lo di sini.</p>
          </div>
          
          <div className="flex gap-2 bg-slate-900/80 p-1.5 rounded-full border border-slate-700">
            <button onClick={() => setActiveTab('anime')} className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'anime' ? 'bg-indigo-500 shadow-lg' : 'text-slate-400'}`}>
              <LayoutDashboard className="w-4 h-4" /> Anime
            </button>
            <button onClick={() => setActiveTab('episode')} className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'episode' ? 'bg-indigo-500 shadow-lg' : 'text-slate-400'}`}>
              <Film className="w-4 h-4" /> Episode
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* FORM SECTION */}
          <div className="lg:col-span-1 bg-slate-800/40 border border-slate-700/50 p-6 rounded-[2.5rem] h-fit sticky top-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-indigo-400">
              <Plus className="w-5 h-5" /> Tambah {activeTab === 'anime' ? 'Series' : 'Episode'}
            </h2>
            
            {activeTab === 'anime' ? (
              <div className="space-y-4">
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-sm focus:border-indigo-500 outline-none" placeholder="Judul Anime" value={animeForm.title} onChange={e => setAnimeForm({...animeForm, title: e.target.value})} />
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-sm focus:border-indigo-500 outline-none" placeholder="Link Poster (URL)" value={animeForm.poster_url} onChange={e => setAnimeForm({...animeForm, poster_url: e.target.value})} />
                <div className="grid grid-cols-2 gap-3">
                  <select className="bg-slate-900 border border-slate-700 rounded-2xl px-3 py-3 text-sm outline-none focus:border-indigo-500" value={animeForm.type} onChange={e => setAnimeForm({...animeForm, type: e.target.value})}>
                    <option>TV</option><option>Movie</option><option>OVA</option><option>ONA</option>
                  </select>
                  <select className="bg-slate-900 border border-slate-700 rounded-2xl px-3 py-3 text-sm outline-none focus:border-indigo-500" value={animeForm.status} onChange={e => setAnimeForm({...animeForm, status: e.target.value})}>
                    <option>Ongoing</option><option>Completed</option>
                  </select>
                </div>
                <button onClick={handleAddAnime} disabled={loading} className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded-2xl font-bold transition-all shadow-lg flex justify-center">
                  {loading ? <Loader2 className="animate-spin" /> : 'Simpan Anime'}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <select className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-500" value={epForm.anime_id} onChange={e => setEpForm({...epForm, anime_id: e.target.value})}>
                  <option value="">-- Pilih Anime --</option>
                  {animes.map(a => <option key={a.id} value={a.id}>{a.title}</option>)}
                </select>
                <div className="grid grid-cols-2 gap-3">
                  <input type="number" className="bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-sm outline-none" placeholder="Eps" value={epForm.episode_number} onChange={e => setEpForm({...epForm, episode_number: e.target.value})} />
                  <input type="text" className="bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-sm outline-none" placeholder="Judul Eps" value={epForm.episode_title} onChange={e => setEpForm({...epForm, episode_title: e.target.value})} />
                </div>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-500" placeholder="Link Embed" value={epForm.embed_url} onChange={e => setEpForm({...epForm, embed_url: e.target.value})} />
                <button onClick={handleAddEpisode} disabled={loading} className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-2xl font-bold transition-all shadow-lg flex justify-center">
                  {loading ? <Loader2 className="animate-spin" /> : 'Simpan Episode'}
                </button>
              </div>
            )}
          </div>

          {/* LIST SECTION */}
          <div className="lg:col-span-2 bg-slate-800/40 border border-slate-700/50 p-6 rounded-[2.5rem]">
            <h2 className="text-xl font-bold mb-6">Daftar {activeTab === 'anime' ? 'Anime' : 'Episode'}</h2>
            <div className="space-y-3">
              {(activeTab === 'anime' ? animes : episodes).map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-slate-900/60 rounded-3xl border border-slate-700 hover:border-indigo-500/50 transition-all">
                  <div>
                    <h3 className="font-bold text-slate-100">{item.title || item.anime_title}</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {activeTab === 'anime' ? `${item.type} • ${item.status}` : `Episode ${item.episode_number}`}
                    </p>
                  </div>
                  <button onClick={() => handleDelete(activeTab === 'anime' ? 'animes' : 'episodes', item.id)} className="p-3 bg-rose-500/10 text-rose-500 rounded-2xl hover:bg-rose-500 hover:text-white transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
