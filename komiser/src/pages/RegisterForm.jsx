import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RegisterForm = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const isArtist = role === 'artist';

  const handleRegister = (e) => {
    e.preventDefault();
    // Simpan data pura-pura
    const userData = {
      name: "User Baru",
      role: isArtist ? "Artist" : "Consumer"
    };
    localStorage.setItem('user', JSON.stringify(userData));
    alert("Pendaftaran Berhasil! Silakan masuk.");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center p-10">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Daftar {isArtist ? "Artist" : "Pembeli"}
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <input type="text" placeholder="Nama Lengkap" className="w-full border p-3 rounded" required />
            <input type="email" placeholder="Email" className="w-full border p-3 rounded" required />
            <input type="password" placeholder="Password" className="w-full border p-3 rounded" required />
            <button className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700">
              Daftar Sekarang
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;