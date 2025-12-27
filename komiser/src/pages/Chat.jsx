import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Chat = () => {
  const [inputPesan, setInputPesan] = useState("");
  // Data awal chat (Pura-puranya dari database)
  const [messages, setMessages] = useState([
    { id: 1, sender: "artist", text: "Halo, ada yang bisa dibantu?" },
    { id: 2, sender: "me", text: "Saya mau pesan logo untuk esports." },
  ]);

  const kirimPesan = (e) => {
    e.preventDefault();
    if (!inputPesan.trim()) return;

    // 1. Tambahkan pesan kita ke layar
    const myMessage = { id: Date.now(), sender: "me", text: inputPesan };
    setMessages((prev) => [...prev, myMessage]);
    setInputPesan("");

    // 2. Simulasi balasan otomatis dari Artist (bot sederhana)
    setTimeout(() => {
      const botReply = { id: Date.now() + 1, sender: "artist", text: "Baik kak, silakan kirim referensinya ya!" };
      setMessages((prev) => [...prev, botReply]);
    }, 1500); // Balas setelah 1.5 detik
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="max-w-3xl mx-auto w-full p-4 flex-grow flex flex-col">
        {/* Area Chat */}
        <div className="flex-grow bg-white rounded-xl shadow p-4 mb-4 overflow-y-auto h-96 border">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex mb-4 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === 'me' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Kirim */}
        <form onSubmit={kirimPesan} className="flex gap-2">
          <input 
            type="text" 
            className="flex-grow border rounded-full px-4 py-2 outline-none focus:border-primary"
            placeholder="Ketik pesan..."
            value={inputPesan}
            onChange={(e) => setInputPesan(e.target.value)}
          />
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;