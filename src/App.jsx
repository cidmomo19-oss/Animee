import { useState, useEffect } from 'react';
import { Search, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function App() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch('/api/animes')
      .then(res => res.json())
      .then(data => setAnimes(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#050810] text-slate-100 font-sans pb-10">
      {/* Header Minimalis */}
      <header className="sticky top-0 z-50 bg-[#050810]/80 backdrop-blur-lg border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          NIMEPAMER.
        </Link>
        <Link to="/search" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10">
          <Search className="w-5 h-5 text-indigo-400" />
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-8">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Update <span className="text-indigo-500">Terbaru</span></h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent ml-4"></div>
        </div>

        {/* Grid 3 Kolom - Besar & Profesional */}
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {animes.map((anime) => (
            <div key={anime.id} className="group cursor-pointer">
              {/* Poster Container */}
              <div className="relative aspect-[2/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group-hover:border-indigo-500/50 transition-all duration-500">
                <img 
                  src={anime.poster_url} 
                  alt={anime.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Glassmorphism Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                  {anime.type}
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/40">
                    <Play className="w-6 h-6 fill-white text-white ml-1" />
                  </div>
                </div>
              </div>
              {/* Title & Info */}
              <div className="mt-4 px-2">
                <h3 className="font-bold text-sm md:text-base line-clamp-1 group-hover:text-indigo-400 transition-colors">
                  {anime.title}
                </h3>
                <p className="text-[11px] md:text-xs text-slate-500 mt-1 font-medium tracking-wide">
                  {anime.status.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
