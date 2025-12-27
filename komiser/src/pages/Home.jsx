import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
// Hapus dulu import Footer kalau belum yakin file-nya ada/benar
// import Footer from '../components/Footer'; 

// --- DATA DUMMY (Pastikan ada di SINI) ---
const allCreators = [
  { id: 1, name: "Budi Santoso", role: "Illustrator Karakter", rating: 4.9, category: "Ilustrasi" },
  { id: 2, name: "Citra Lestari", role: "UI/UX Designer", rating: 5.0, category: "Desain Web" },
  { id: 3, name: "Andi Wijaya", role: "Desainer Logo", rating: 4.8, category: "Logo" },
  { id: 4, name: "Siti Aminah", role: "Animator 2D", rating: 4.7, category: "Animasi" },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Logika Filter
  const filteredCreators = allCreators.filter((creator) => {
    if (searchTerm === "") return true; // Kalau search kosong, tampilkan semua
    return creator.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           creator.role.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* --- HERO SECTION (Search) --- */}
      <div className="bg-white py-16 px-4 text-center border-b">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Temukan Kreator</h1>
        <p className="text-gray-500 mb-8">Cari ilustrator atau desainer favoritmu di sini</p>
        
        {/* INPUT PENCARIAN */}
        <div className="max-w-lg mx-auto flex gap-2">
          <input 
            type="text" 
            placeholder="Ketik nama (contoh: Budi)..."
            className="flex-grow border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* --- HASIL PENCARIAN --- */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-xl font-bold mb-6 text-gray-700">
          Daftar Artist ({filteredCreators.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCreators.length > 0 ? (
            filteredCreators.map((item) => (
              <Link to={`/payment/${item.id}`} key={item.id} className="block group">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-500 transition">
                  {/* Foto Profil Bulat (Placeholder) */}
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-4 flex items-center justify-center font-bold text-gray-500">
                    {item.name.charAt(0)}
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.role}</p>
                  
                  <div className="flex items-center text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded w-fit">
                    ⭐ {item.rating}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-10 text-gray-500">
              Tidak ada artist dengan nama "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;