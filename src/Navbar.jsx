import { Link, useLocation } from 'react-router-dom';
import { Home, Search, List, LayoutGrid } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
      <nav className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-2 rounded-[2.5rem] shadow-2xl flex justify-around items-center">
        <Link to="/" className={`p-4 rounded-full transition-all ${isActive('/') ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/40' : 'text-slate-400'}`}>
          <Home size={24} />
        </Link>
        <Link to="/search" className={`p-4 rounded-full transition-all ${isActive('/search') ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/40' : 'text-slate-400'}`}>
          <Search size={24} />
        </Link>
        <Link to="/list" className={`p-4 rounded-full transition-all ${isActive('/list') ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/40' : 'text-slate-400'}`}>
          <List size={24} />
        </Link>
      </nav>
    </div>
  );
}
