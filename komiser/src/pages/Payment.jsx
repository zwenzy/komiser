import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Payment = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle"); // idle, processing, success

  const handleBayar = () => {
    setStatus("processing");
    
    // Simulasi delay bank (3 detik)
    setTimeout(() => {
      setStatus("success");
      alert("Pembayaran Berhasil! Pesanan diteruskan ke Artist.");
      navigate('/chat'); // Pindah ke chat setelah bayar
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow border">
        <h2 className="text-2xl font-bold mb-4">Pembayaran ID #{id}</h2>
        
        <div className="bg-blue-50 p-4 rounded mb-6 text-sm text-blue-800">
          Anda akan membayar jasa ilustrasi.
        </div>

        {/* Tombol Berubah Sesuai Status */}
        <button 
          onClick={handleBayar}
          disabled={status === "processing"}
          className={`w-full py-3 rounded-lg font-bold text-white transition ${
            status === "processing" ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-blue-600"
          }`}
        >
          {status === "idle" && "Bayar Sekarang (QRIS)"}
          {status === "processing" && "Memproses..."}
          {status === "success" && "Berhasil!"}
        </button>
      </div>
    </div>
  );
};

export default Payment;