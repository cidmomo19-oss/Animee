import { useState, useEffect } from 'react';
import { Search, Play, Calendar, Star, LayoutGrid } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function App() {
  const [animes, setAnimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/animes').then(res => res.json()).then(data => setAnimes(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-200 font-sans pb-20">
      {/* Floating Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-6xl mx-auto bg-slate-900/50 backdrop-blur-2xl border border-white/5 px-6 py-3 rounded-[2rem] flex justify-between items-center shadow-2xl">
          <Link to="/" className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent tracking-tighter">
            NIMEPAMER
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/search')} className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all">
              <Search className="w-5 h-5 text-indigo-400" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full border-2 border-white/10 shadow-lg shadow-indigo-500/20"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 px-4 max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 border border-white/5 aspect-[16/9] md:aspect-[21/9]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050811]/80 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.alphacoders.com/132/1322308.jpeg" 
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Featured"
          />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 max-w-lg">
            <span className="bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Featured Anime</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 leading-none">Oshi No Ko</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base line-clamp-2">Dunia hiburan adalah medan perang. Pamerkan koleksi animemu dengan gaya yang berbeda di sini.</p>
            <div className="flex gap-3 mt-8">
              <button className="bg-white text-black px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                <Play className="fill-black w-4 h-4" /> Nonton Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 mt-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-indigo-500 rounded-full"></div>
            <h3 className="text-2xl font-bold">Terbaru</h3>
          </div>
          <div className="flex gap-2">
             <span className="text-xs font-medium text-slate-500 px-4 py-2 bg-white/5 rounded-full border border-white/5">TV</span>
             <span className="text-x
