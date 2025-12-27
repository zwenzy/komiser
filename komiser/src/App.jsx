import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Hapus BrowserRouter
import Home from './pages/Home';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Payment from './pages/Payment';
import Register from './pages/Register';
import RegisterForm from './pages/RegisterForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/:role" element={<RegisterForm />} />
    </Routes>
  );
}

export default App;