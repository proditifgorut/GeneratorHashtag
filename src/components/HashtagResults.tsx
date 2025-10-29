import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import type { HashtagGroup } from '../types';
import HashtagCategory from './HashtagCategory';

interface HashtagResultsProps {
  hashtags: HashtagGroup[];
}

const HashtagResults: React.FC<HashtagResultsProps> = ({ hashtags }) => {
  const [copiedCategory, setCopiedCategory] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const allHashtags = hashtags.flatMap(group => group.tags).join(' ');
  const totalCount = hashtags.reduce((sum, group) => sum + group.tags.length, 0);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(allHashtags);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleCopyCategory = (category: string, tags: string[]) => {
    navigator.clipboard.writeText(tags.join(' '));
    setCopiedCategory(category);
    setTimeout(() => setCopiedCategory(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Hashtag yang Dihasilkan</h3>
            <p className="text-gray-600 mt-1">Total {totalCount} hashtag</p>
          </div>
          <button
            onClick={handleCopyAll}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-md transition-all"
          >
            {copiedAll ? (
              <>
                <Check className="w-4 h-4" />
                Tersalin!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Salin Semua
              </>
            )}
          </button>
        </div>

        <div className="space-y-6">
          {hashtags.map((group) => (
            <HashtagCategory
              key={group.category}
              group={group}
              onCopy={handleCopyCategory}
              isCopied={copiedCategory === group.category}
            />
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">💡 Tips:</span> Gunakan kombinasi hashtag populer dan niche untuk hasil terbaik. 
            Instagram mengizinkan maksimal 30 hashtag per post, tapi 10-15 hashtag yang relevan biasanya lebih efektif.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HashtagResults;
