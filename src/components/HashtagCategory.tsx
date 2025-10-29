import React from 'react';
import { Copy, Check, TrendingUp, Target, Zap } from 'lucide-react';
import type { HashtagGroup } from '../types';

interface HashtagCategoryProps {
  group: HashtagGroup;
  onCopy: (category: string, tags: string[]) => void;
  isCopied: boolean;
}

const HashtagCategory: React.FC<HashtagCategoryProps> = ({ group, onCopy, isCopied }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Populer':
        return <TrendingUp className="w-4 h-4" />;
      case 'Niche':
        return <Target className="w-4 h-4" />;
      case 'Trending':
        return <Zap className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Populer':
        return 'from-purple-500 to-purple-600';
      case 'Niche':
        return 'from-pink-500 to-pink-600';
      case 'Trending':
        return 'from-orange-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 bg-gradient-to-r ${getCategoryColor(group.category)} rounded-lg flex items-center justify-center text-white`}>
            {getCategoryIcon(group.category)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{group.category}</h4>
            <p className="text-xs text-gray-500">{group.tags.length} hashtag</p>
          </div>
        </div>
        <button
          onClick={() => onCopy(group.category, group.tags)}
          className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Tersalin
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Salin
            </>
          )}
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {group.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-300 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HashtagCategory;
