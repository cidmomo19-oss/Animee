export default function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Header / Navbar - Melengkung (rounded-3xl) */}
      <header className="flex justify-between items-center mb-10 bg-slate-800/50 backdrop-blur-md p-4 px-6 rounded-3xl shadow-lg border border-slate-700/50">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          NimePamer.
        </h1>
        <nav className="space-x-2">
          <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-2xl text-sm font-medium transition-all">Home</button>
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-2xl text-sm font-medium shadow-lg shadow-indigo-500/30 transition-all">Kategori</button>
        </nav>
      </header>

      <main>
        <h2 className="text-xl font-bold mb-6 ml-2 flex items-center gap-2">
          <span className="w-2 h-6 bg-indigo-500 rounded-full"></span> 
          Update Terbaru
        </h2>

        {/* Grid Card Anime */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          
          {/* Contoh 1 Card Anime - Super melengkung dan bersih */}
          <div className="group bg-slate-800 rounded-[2rem] p-2 hover:bg-slate-700 transition-all cursor-pointer border border-slate-700/50 hover:border-indigo-500/50">
            {/* Tempat Poster */}
            <div className="aspect-[3/4] w-full bg-slate-900 rounded-[1.5rem] overflow-hidden mb-3 relative">
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-xl text-[10px] font-bold text-cyan-300">TV</div>
            </div>
            {/* Info Judul */}
            <div className="px-2 pb-2 text-center">
              <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-indigo-400 transition-colors">Judul Anime Keren</h3>
              <p className="text-[11px] text-slate-400 mt-1">Episode 12 • Ongoing</p>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
