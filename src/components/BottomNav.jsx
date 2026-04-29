import { NavLink } from 'react-router-dom';
import { Home, Grid3x3, List, Settings } from 'lucide-react';

// Fungsi helper biar styling NavLink lebih gampang
const getLinkClass = ({ isActive }) =>
  `flex flex-col items-center gap-1 transition-all duration-300 ${
    isActive ? 'text-indigo-400 scale-110' : 'text-slate-500 hover:text-slate-300'
  }`;

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-slate-800/60 backdrop-blur-xl border border-slate-700/80 rounded-full shadow-2xl z-50">
      <div className="flex justify-around items-center h-16">
        <NavLink to="/" className={getLinkClass}>
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold">Home</span>
        </NavLink>
        <NavLink to="/genre" className={getLinkClass}>
          <Grid3x3 className="w-6 h-6" />
          <span className="text-[10px] font-bold">Genre</span>
        </NavLink>
        <NavLink to="/list" className={getLinkClass}>
          <List className="w-6 h-6" />
          <span className="text-[10px] font-bold">List</span>
        </NavLink>
        <NavLink to="/settings" className={getLinkClass}>
          <Settings className="w-6 h-6" />
          <span className="text-[10px] font-bold">Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}
