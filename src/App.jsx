import { useState } from 'react';
import { Search, PlayCircle } from 'lucide-react';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-[#0b1120] p-4 md:p-8 font-sans text-slate-100 selection:bg-indigo-500 selection:text-white">
      
      {/* Navbar Premium Membulat (rounded-full) */}
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-slate-800/40 backdrop-blur-xl p-4 px-8 rounded-full shadow-2xl border border-slate-700/50">
        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 tracking-tight">
          NimePamer<span className="text-indigo-500">.</span>
        </h1>
        
        {/* Search Bar - Sangat Membulat */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-full text-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            placeholder="Cari anime buat dipamerin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <main>
        <h2 className="text-2xl font-bold mb-8 ml-2 flex items-center gap-3">
          <div className="w-3 h-8 bg-gradient-to-b from-indigo-500 to-cyan-400 rounded-full shadow-lg shadow-indigo-500/30"></div> 
          Update Terbaru
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          
          {/* Card Premium & Melengkung Mulus */}
          <div className="group bg-slate-800/40 backdrop-blur-sm rounded-[2.5rem] p-3 hover:bg-slate-700/60 transition-all duration-300 cursor-pointer border border-slate-700/50 hover:border-indigo-400/50 shadow-xl hover:shadow-indigo-500/20">
            <div className="aspect-[3/4] w-full bg-slate-900 rounded-[2rem] overflow-hidden mb-4 relative">
              {/* Dummy Image - Nanti diganti poster beneran */}
              <div className="w-full h-full bg-gradient-to-tr from-slate-800 to-slate-700 group-hover:scale-105 transition-transform duration-500"></div>
              
              {/* Badge Type */}
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-cyan-300 border border-white/10">Movie</div>
              
              {/* Overlay Icon Play Pas Disorot */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <PlayCircle className="w-14 h-14 text-white opacity-80 drop-shadow-lg" />
              </div>
            </div>
            <div className="px-3 pb-3 text-center">
              <h3 className="font-bold text-base line-clamp-1 group-hover:text-indigo-400 transition-colors">Judul Dummy Keren</h3>
              <p className="text-xs text-slate-400 mt-1.5 font-medium">Episode 1 • Completed</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
