import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  // 1. Cek apakah ada data user di memori browser (LocalStorage)
  // Kalau ada, berarti user sedang Login.
  const user = JSON.parse(localStorage.getItem('user'));

  // 2. Fungsi untuk Logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // Hapus data user
    alert("Anda telah keluar.");
    navigate('/login'); // Pindah ke halaman login
    window.location.reload(); // Refresh halaman agar tampilan Navbar berubah
  };

  return (
    <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center shadow-sm sticky top-0 z-50">
      
      {/* BAGIAN KIRI: LOGO */}
      <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-primary transition cursor-pointer">
        KOMISER
      </Link>

      {/* BAGIAN TENGAH: MENU */}
      <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
        <Link to="/" className="hover:text-primary transition cursor-pointer">Kategori</Link>
        <Link to="/chat" className="hover:text-primary transition cursor-pointer">Chat</Link>
      </div>

      {/* BAGIAN KANAN: TOMBOL LOGIN/LOGOUT */}
      <div className="flex items-center space-x-4">
        {user ? (
          // --- TAMPILAN JIKA SUDAH LOGIN ---
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-gray-500">Halo,</div>
              <div className="font-bold text-gray-800 text-sm">{user.name}</div>
            </div>
            
            {/* Avatar Bulat Sederhana */}
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
              {user.name.charAt(0).toUpperCase()}
            </div>

            {/* Tombol Logout */}
            <button 
              onClick={handleLogout}
              className="ml-2 text-red-500 text-sm font-medium hover:text-red-700 hover:underline"
            >
              Keluar
            </button>
          </div>
        ) : (
          // --- TAMPILAN JIKA BELUM LOGIN (Tamu) ---
          <>
            <Link to="/login">
              <button className="px-6 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition hidden sm:block cursor-pointer">
                Masuk
              </button>
            </Link>
            
            <Link to="/register">
              <button className="px-6 py-2 bg-primary text-white hover:bg-blue-600 rounded-lg font-medium transition shadow-md shadow-blue-500/20 cursor-pointer">
                Daftar
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;