import { Link } from 'react-router-dom';
import { Play, ArrowLeft } from 'lucide-react';

export default function Detail() {
  return (
    <div className="min-h-screen bg-[#0b1120] font-sans text-slate-100">
      {/* Header dengan Poster */}
      <header className="relative h-96">
        {/* Background Poster (Blur) */}
        <div className="absolute inset-0 bg-slate-800 bg-cover bg-center [mask-image:linear-gradient(to_top,transparent,black_50%)]" style={{ filter: 'blur(30px) brightness(0.6)' }}></div>
        {/* Tombol Kembali */}
        <Link to="/" className="absolute top-6 left-4 z-10 p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        {/* Poster Utama */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="w-48 h-64 bg-slate-700 rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-600">
                {/* Dummy Poster */}
            </div>
        </div>
      </header>

      <main className="p-6 pt-8 max-w-3xl mx-auto">
        {/* Judul & Info */}
        <section className="text-center mb-8">
          <p className="text-sm font-bold text-indigo-400 mb-1">Movie • 2016 • Studio CoMix</p>
          <h1 className="text-4xl font-black text-white tracking-tight">Judul Anime Keren Banget</h1>
        </section>

        {/* Sinopsis */}
        <section className="mb-8">
            <p className="text-slate-400 text-base leading-relaxed text-center">
                Ini adalah sinopsis dummy. Ceritanya tentang petualangan seru para karakter utama dalam menghadapi tantangan yang tidak terduga.
            </p>
        </section>

        {/* Daftar Episode */}
        <section>
            <h2 className="text-xl font-bold mb-4">Daftar Episode</h2>
            <div className="space-y-3">
                <Link to="/watch/1" className="flex items-center justify-between p-4 bg-slate-800/60 rounded-2xl border border-slate-700 hover:bg-slate-700/80 hover:border-indigo-500/50 transition-all group">
                    <div className="font-bold">Episode 1 - Awal Mula</div>
                    <Play className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                </Link>
            </div>
        </section>
      </main>
    </div>
  );
}
