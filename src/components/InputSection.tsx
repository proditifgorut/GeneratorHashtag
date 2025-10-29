import React from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';

interface InputSectionProps {
  description: string;
  onDescriptionChange: (value: string) => void;
  onGenerate: () => void;
  onClear: () => void;
  isGenerating: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({
  description,
  onDescriptionChange,
  onGenerate,
  onClear,
  isGenerating,
}) => {
  const exampleDescriptions = [
    'Liburan ke pantai dengan keluarga',
    'Makanan enak di restoran favorit',
    'Workout pagi di gym',
    'Fotografi landscape gunung',
  ];

  const handleExampleClick = (example: string) => {
    onDescriptionChange(example);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
      <div className="space-y-4">
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
            Deskripsi Foto atau Konten
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            placeholder="Contoh: Liburan ke Bali, menikmati sunset di pantai Kuta dengan teman-teman..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
            rows={5}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Contoh:</span>
          {exampleDescriptions.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
            >
              {example}
            </button>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={onGenerate}
            disabled={!description.trim() || isGenerating}
            className="flex-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-5 h-5 animate-spin" />
                Menghasilkan...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Hashtag
              </>
            )}
          </button>
          
          {description && (
            <button
              onClick={onClear}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              <span className="hidden md:inline">Reset</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputSection;
