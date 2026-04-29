import { Search as SearchIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Search() {
  return (
    <div className="min-h-screen bg-[#0b1120] p-4 md:p-8 font-sans text-slate-100">
      <header className="flex items-center gap-4 mb-8">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-14 pr-4 py-4 bg-slate-800/60 border border-slate-700/50 rounded-full text-base placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
            placeholder="Ketik judul anime..."
            autoFocus
          />
        </div>
        <Link to="/" className="text-slate-400 hover:text-white transition-colors">
          <X className="w-8 h-8"/>
        </Link>
      </header>
      <main>
        <p className="text-center text-slate-500">Hasil pencarian akan muncul di sini.</p>
      </main>
    </div>
  );
}
