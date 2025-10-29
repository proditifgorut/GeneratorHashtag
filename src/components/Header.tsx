import React from 'react';
import { Instagram, Hash } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Hash className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Generator Hashtag
              </h1>
              <p className="text-sm text-gray-600">Untuk Instagram</p>
            </div>
          </div>
          <Instagram className="w-8 h-8 text-pink-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
