import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Watch() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center font-sans">
            <div className="w-full max-w-6xl aspect-video bg-slate-900 border-b-4 border-indigo-500">
                {/* Tempat Iframe Video */}
            </div>
            <div className="p-6 w-full max-w-6xl">
                <h1 className="text-2xl font-bold text-white mb-2">Episode 1 - Awal Mula</h1>
                <Link to="/anime/1" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Halaman Detail
                </Link>
            </div>
        </div>
    );
}
