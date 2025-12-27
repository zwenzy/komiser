import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Bergabung dengan Komiser</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pilihan Konsumen */}
            <Link to="/register/consumer">
              <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg border hover:border-blue-500 cursor-pointer transition">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Daftar sebagai Pembeli</h3>
                <p className="text-gray-500">Saya ingin mencari jasa ilustrasi.</p>
              </div>
            </Link>
            {/* Pilihan Artist */}
            <Link to="/register/artist">
              <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg border hover:border-green-500 cursor-pointer transition">
                <h3 className="text-xl font-bold text-green-600 mb-2">Daftar sebagai Artist</h3>
                <p className="text-gray-500">Saya ingin menjual karya saya.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;