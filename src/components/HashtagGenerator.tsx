import React, { useState } from 'react';
import { Sparkles, TrendingUp, Target, Users } from 'lucide-react';
import InputSection from './InputSection';
import HashtagResults from './HashtagResults';
import { generateHashtags } from '../utils/hashtagGenerator';
import type { HashtagGroup } from '../types';

const HashtagGenerator: React.FC = () => {
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState<HashtagGroup[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!description.trim()) return;

    setIsGenerating(true);
    
    setTimeout(() => {
      const generatedHashtags = generateHashtags(description);
      setHashtags(generatedHashtags);
      setIsGenerating(false);
    }, 800);
  };

  const handleClear = () => {
    setDescription('');
    setHashtags([]);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Buat Hashtag Optimal untuk Postingan Anda
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Masukkan deskripsi foto atau konten Anda, dan dapatkan kumpulan hashtag yang relevan untuk meningkatkan jangkauan Instagram
        </p>
      </div>

      <InputSection
        description={description}
        onDescriptionChange={setDescription}
        onGenerate={handleGenerate}
        onClear={handleClear}
        isGenerating={isGenerating}
      />

      {hashtags.length > 0 && (
        <HashtagResults hashtags={hashtags} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800">Hashtag Trending</h3>
          <p className="text-gray-600 text-sm">Dapatkan hashtag yang sedang populer dan banyak dicari</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-pink-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800">Hashtag Niche</h3>
          <p className="text-gray-600 text-sm">Targetkan audiens spesifik dengan hashtag yang relevan</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800">Jangkauan Luas</h3>
          <p className="text-gray-600 text-sm">Tingkatkan engagement dengan kombinasi hashtag optimal</p>
        </div>
      </div>
    </div>
  );
};

export default HashtagGenerator;
