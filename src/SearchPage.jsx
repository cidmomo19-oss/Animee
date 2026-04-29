import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  return (
    <div className="min-h-screen bg-[#050810] text-slate-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="p-3 bg-white/5 rounded-full hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              autoFocus
              type="text" 
              placeholder="Cari anime..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="text-center mt-20 text-slate-500">
          {query ? `Mencari "${query}"...` : "Ketik sesuatu untuk mulai mencari"}
        </div>
      </div>
    </div>
  );
}
