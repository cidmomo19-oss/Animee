import { Outlet } from 'react-router-dom';
import BottomNav from './components/BottomNav';

export default function Layout() {
  return (
    <>
      <div className="pb-24"> {/* Kasih padding bawah biar konten gak ketutupan BottomNav */}
        <Outlet /> {/* Di sini halaman (Home, Genre, dll) akan ditampilkan */}
      </div>
      <BottomNav />
    </>
  );
}
