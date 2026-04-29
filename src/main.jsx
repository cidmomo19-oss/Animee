import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout.jsx';
import App from './App.jsx'; // Ini jadi Halaman Home
import Admin from './Admin.jsx';
import Search from './pages/Search.jsx';
import Detail from './pages/Detail.jsx';
import Watch from './pages/Watch.jsx';
import Genre from './pages/Genre.jsx';
import List from './pages/List.jsx';
import Settings from './pages/Settings.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rute dengan BottomNav */}
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="genre" element={<Genre />} />
          <Route path="list" element={<List />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
        {/* Rute tanpa BottomNav */}
        <Route path="/search" element={<Search />} />
        <Route path="/anime/:animeId" element={<Detail />} />
        <Route path="/watch/:episodeId" element={<Watch />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
