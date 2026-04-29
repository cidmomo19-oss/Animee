import { useState, useEffect } from 'react';
import { Search, ArrowLeft, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [animes, setAnimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/animes').then(res => res.json()).then(data => setAnimes(data));
  }, []);

  const filteredAnimes = animes.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050811] text-slate-200 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Search Header */}
        <div className="flex items-center gap-4 mb-12">
          <button onClick={() => navigate('/')} className="p-4 bg-white/5 hover:bg-white/10 rounded-[1.5rem] transition-all border border-white/5">
            <ArrowLeft className="w-6 h-6 text-indigo-400" />
          </button>
          <div className="relative flex-1">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              autoFocus
              type="text" 
              placeholder="Cari judul anime..." 
              className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] py-4 pl-14 pr-6 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all text-lg"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 px-2 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-400">
            {query ? `Hasil pencarian: ${filteredAnimes.length}` : 'Semua Anime'}
          </h2>
          {query && (
            <button onClick={() => setQuery('')} className="flex items-center gap-2 text-rose-400 text-sm font-medium">
              <XCircle className="w-4 h-4" /> Bersihkan
            </button>
          )}
        </div>

        {/* Results Grid */}
        {filteredAnimes.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredAnimes.map((anime) => (
              <div key={anime.id} className="group">
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/5 bg-slate-900 mb-3 shadow-xl">
                  <img src={anime.poster_url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-sm px-2 group-hover:text-indigo-400 transition-colors">{anime.title}</h3>
                <p className="text-[10px] text-slate-500 px-2 uppercase tracking-wider mt-1">{anime.type} • {anime.status}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
            <p className="text-slate-500 font-medium">Anime yang abang cari nggak ketemu...</p>
          </div>
        )}
      </div>
    </div>
  );
}
