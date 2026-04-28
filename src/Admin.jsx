import { useState } from 'react';
import { Plus, Edit2, Trash2, LayoutDashboard, Film } from 'lucide-react';

export default function Admin() {
  // Buat ganti menu tab Admin (Anime / Episode)
  const [activeTab, setActiveTab] = useState('anime'); 

  return (
    <div className="min-h-screen bg-[#0b1120] p-4 md:p-8 font-sans text-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Admin */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-8 bg-indigo-600/10 border border-indigo-500/20 p-6 rounded-[2rem]">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl font-black text-white">Ruang Rahasia</h1>
            <p className="text-indigo-300 mt-1 text-sm">Kelola data pameranmu di sini bang.</p>
          </div>
          
          {/* Tombol Ganti Menu */}
          <div className="flex gap-2 bg-slate-800/80 p-1.5 rounded-full border border-slate-700">
            <button 
              onClick={() => setActiveTab('anime')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'anime' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'text-slate-400 hover:text-white'}`}
            >
              <LayoutDashboard className="w-4 h-4" /> Anime
            </button>
            <button 
              onClick={() => setActiveTab('episode')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'episode' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'text-slate-400 hover:text-white'}`}
            >
              <Film className="w-4 h-4" /> Episode
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. KOTAK KIRI - Form Tambah Data */}
          <div className="lg:col-span-1 bg-slate-800/40 border border-slate-700/50 p-6 rounded-[2rem] h-fit">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Plus className="w-5 h-5 text-cyan-400" /> 
              Tambah {activeTab === 'anime' ? 'Series' : 'Episode'}
            </h2>
            
            {activeTab === 'anime' ? (
              // --- FORM ANIME ---
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1 ml-2">Judul Anime</label>
                  <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Ketik judul..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1 ml-2">URL Poster (Gambar)</label>
                  <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="https://..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1 ml-2">Tipe</label>
                    <select className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 appearance-none">
                      <option>TV</option>
                      <option>Movie</option>
                      <option>OVA</option>
                      <option>ONA</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1 ml-2">Status</label>
                    <select className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 appearance-none">
                      <option>Ongoing</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </div>
                <button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 active:scale-95">
                  Simpan Anime
                </button>
              </div>
            ) : (
              // --- FORM EPISODE ---
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1 ml-2">Pilih Anime</label>
                  <select className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 appearance-none">
                    <option>-- Pilih dari daftar --</option>
                    <option>Kimi no Nawa (Dummy)</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1 ml-2">Eps Ke-</label>
                    <input type="number" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500" placeholder="1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1 ml-2">Nama Eps</label>
                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500" placeholder="Opsional" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1 ml-2">URL Embed (Iframe)</label>
                  <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500" placeholder="Link embed video..." />
                </div>
                <button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-2xl transition-all shadow-lg shadow-cyan-500/25 active:scale-95">
                  Simpan Episode
                </button>
              </div>
            )}
          </div>

          {/* 2. KOTAK KANAN - Daftar Data buat di Edit/Hapus */}
          <div className="lg:col-span-2 bg-slate-800/40 border border-slate-700/50 p-6 rounded-[2rem]">
            <h2 className="text-xl font-bold mb-6">Daftar {activeTab === 'anime' ? 'Anime' : 'Episode'}</h2>
            
            <div className="space-y-3">
              {/* Ini Dummy List yang nanti diisi otomatis dari database */}
              <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-[1.5rem] border border-slate-700/50 hover:border-slate-600 transition-colors group">
                <div>
                  <h3 className="font-bold text-slate-200">Kimi no Nawa</h3>
                  <p className="text-xs text-slate-400 mt-1">Movie • Completed</p>
                </div>
                {/* Tombol Edit & Hapus - Melengkung banget */}
                <div className="flex gap-2">
                  <button className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl hover:bg-indigo-500 hover:text-white transition-all">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-rose-500/10 text-rose-400 rounded-2xl hover:bg-rose-500 hover:text-white transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
