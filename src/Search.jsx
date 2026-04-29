import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Search as SearchIcon, X } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [allAnimes, setAllAnimes] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('/api/animes').then(res => res.json()).then(data => setAllAnimes(data));
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 1) {
      const results = allAnimes.filter(a => a.title.toLowerCase().includes(val.toLowerCase()));
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] pb-32 text-slate-100">
      <Navbar />
      
      <div className="p-6 pt-10">
        <div className="relative mb-8">
          <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Cari judul anime..." 
            className="w-full bg-slate-800/50 border border-white/10 py-5 pl-14 pr-6 rounded-[2rem] outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-lg font-medium"
            value={query}
            onChange={handleSearch}
            autoFocus
          />
        </div>

        {query.length > 0 ? (
          <div>
            <h2 className="text-sm font-bold text-slate-500 mb-6 px-2 uppercase tracking-widest">Hasil Pencarian ({filtered.length})</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {filtered.map(anime => (
                <div key={anime.id} className="bg-slate-800/30 p-2 rounded-[2.5rem] border border-white/5">
                  <img src={anime.poster_url} className="aspect-square object-cover rounded-[2rem] mb-3" />
                  <h3 className="font-bold text-sm px-3 pb-2 line-clamp-1">{anime.title}</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5 text-slate-500">
              <SearchIcon size={32} />
            </div>
            <p className="text-slate-500 font-medium italic text-sm">Cari sesuatu yang mau dipamerin...</p>
          </div>
        )}
      </div>
    </div>
  );
}
