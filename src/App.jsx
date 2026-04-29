import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Play } from 'lucide-react';

export default function App() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch('/api/animes').then(res => res.json()).then(data => setAnimes(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1120] pb-32 text-slate-100">
      <Navbar />
      
      {/* Hero Section Simple */}
      <section className="p-6 pt-10">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-8 relative overflow-hidden shadow-2xl shadow-indigo-500/20">
          <div className="relative z-10">
            <h1 className="text-4xl font-black mb-2 leading-tight">Nonton Anime<br/>Tanpa Iklan.</h1>
            <p className="text-indigo-100 text-sm opacity-80 mb-6">Koleksi pribadi buat pamer doang bang.</p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold text-sm shadow-xl">Mulai Nonton</button>
          </div>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Grid Anime */}
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span> Terupdate
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {animes.map((anime) => (
            <div key={anime.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-3 shadow-lg border border-white/5">
                <img src={anime.poster_url || 'https://via.placeholder.com/300x400'} alt={anime.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-3 right-3 bg-indigo-500 text-[10px] font-black px-3 py-1 rounded-full shadow-lg border border-white/20 uppercase tracking-wider">{anime.type}</div>
              </div>
              <h3 className="font-bold text-sm line-clamp-1 group-hover:text-indigo-400 transition-colors px-2">{anime.title}</h3>
              <p className="text-[11px] text-slate-500 mt-0.5 px-2 font-medium">{anime.status}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
