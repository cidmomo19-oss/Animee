import { Link } from 'react-router-dom';
import { Search, PlayCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1120] p-6 md:p-8 font-sans text-slate-100 selection:bg-indigo-500 selection:text-white">
      
      {/* Header Profesional */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tighter">
            Nime<span className="text-indigo-400">Pamer</span>
          </h1>
          <p className="text-sm text-slate-400">Pameran koleksi pribadimu.</p>
        </div>
        <Link to="/search" className="p-4 bg-slate-800/60 border border-slate-700/80 rounded-full hover:bg-slate-700/80 transition-colors">
          <Search className="h-6 w-6 text-slate-300" />
        </Link>
      </header>

      <main>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Terbaru</h2>
          <Link to="/list" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">Lihat Semua</Link>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          
          {[...Array(6)].map((_, i) => ( // Ini cuma dummy loop buat nampilin 6 card
            <Link to={`/anime/${i + 1}`} key={i} className="group block">
              <div className="bg-slate-800/40 rounded-[1.8rem] p-2 hover:bg-slate-700/60 transition-all duration-300 border border-slate-700/50 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/10">
                <div className="aspect-[3/4] w-full bg-slate-900 rounded-[1.4rem] overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-tr from-slate-800 to-slate-700 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white/80" />
                  </div>
                </div>
                <div className="px-1 pt-3 pb-2 text-center">
                  <h3 className="font-bold text-sm md:text-base line-clamp-1">Judul Anime Dummy</h3>
                </div>
              </div>
            </Link>
          ))}
          
        </div>
      </main>
    </div>
  )
}
