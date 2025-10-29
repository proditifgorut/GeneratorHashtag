import React, { useState } from 'react';
import { Hash, Copy, Check, Sparkles, TrendingUp, Target, Instagram } from 'lucide-react';
import HashtagGenerator from './components/HashtagGenerator';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <HashtagGenerator />
      </main>
      
      <footer className="py-8 text-center text-gray-600 text-sm">
        <p>© 2025 Generator Hashtag Instagram. Tingkatkan jangkauan postingan Anda!</p>
      </footer>
    </div>
  );
}

export default App;
