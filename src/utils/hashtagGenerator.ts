import type { HashtagGroup } from '../types';

const hashtagDatabase = {
  travel: {
    popular: ['#travel', '#travelling', '#travelgram', '#instatravel', '#vacation', '#holiday', '#wanderlust', '#adventure'],
    niche: ['#travelphotography', '#travellife', '#travelblogger', '#traveladdict', '#exploremore', '#traveldiary'],
    trending: ['#travelgoals', '#travelinspiration', '#traveller', '#traveltheworld', '#travelawesome']
  },
  food: {
    popular: ['#food', '#foodie', '#foodporn', '#instafood', '#delicious', '#yummy', '#foodstagram', '#foodlover'],
    niche: ['#foodphotography', '#foodblogger', '#foodgasm', '#foodies', '#foodpics', '#tasty'],
    trending: ['#foodoftheday', '#foodheaven', '#foodcoma', '#foodart', '#foodstyling']
  },
  fitness: {
    popular: ['#fitness', '#gym', '#workout', '#fit', '#fitnessmotivation', '#training', '#health', '#fitfam'],
    niche: ['#fitnessjourney', '#fitnesslife', '#gymmotivation', '#workoutmotivation', '#fitnessgirl', '#fitnessmodel'],
    trending: ['#fitnessgoals', '#fitnesstransformation', '#gymlife', '#workoutroutine', '#healthylifestyle']
  },
  photography: {
    popular: ['#photography', '#photo', '#photographer', '#photooftheday', '#instagood', '#beautiful', '#picoftheday'],
    niche: ['#photographylovers', '#photoshoot', '#photographyeveryday', '#photographyislife', '#photoart'],
    trending: ['#photographylover', '#photographyislifee', '#photographysouls', '#photographerlife']
  },
  nature: {
    popular: ['#nature', '#naturephotography', '#landscape', '#beautiful', '#sunset', '#sky', '#mountains'],
    niche: ['#naturelovers', '#naturelover', '#landscapephotography', '#naturegram', '#natureaddict'],
    trending: ['#natureperfection', '#nature_brilliance', '#landscapelovers', '#naturephoto']
  },
  fashion: {
    popular: ['#fashion', '#style', '#fashionista', '#ootd', '#fashionblogger', '#instafashion', '#stylish'],
    niche: ['#fashionstyle', '#fashionable', '#fashiongram', '#fashionpost', '#styleinspo'],
    trending: ['#fashiongoals', '#fashiontrends', '#fashiondiaries', '#fashionlover']
  },
  lifestyle: {
    popular: ['#lifestyle', '#life', '#instagood', '#motivation', '#inspiration', '#happy', '#love'],
    niche: ['#lifestyleblogger', '#lifestylephotography', '#lifestylegoals', '#lifestyleblog'],
    trending: ['#lifestyleinspiration', '#lifestyledesign', '#lifestylechange', '#lifestylechoices']
  },
  beach: {
    popular: ['#beach', '#beachlife', '#ocean', '#sea', '#summer', '#vacation', '#paradise'],
    niche: ['#beachvibes', '#beachday', '#beachlover', '#beachtime', '#oceanlove'],
    trending: ['#beachgoals', '#beachtherapy', '#oceanvibes', '#beachplease']
  }
};

const indonesianHashtags = {
  travel: ['#liburan', '#jalan2', '#piknik', '#wisata', '#traveling', '#Indonesia', '#explorerIndonesia'],
  food: ['#makanan', '#kuliner', '#makananenak', '#kulinernusantara', '#foodIndonesia', '#jajanan'],
  general: ['#instagood', '#photooftheday', '#beautiful', '#happy', '#love', '#fun', '#instadaily']
};

function detectCategory(description: string): string {
  const lowerDesc = description.toLowerCase();
  
  if (lowerDesc.match(/pantai|beach|laut|sea|sunset/)) return 'beach';
  if (lowerDesc.match(/liburan|travel|jalan|wisata|vacation/)) return 'travel';
  if (lowerDesc.match(/makanan|food|kuliner|makan|restoran|cafe/)) return 'food';
  if (lowerDesc.match(/gym|workout|fitness|olahraga|exercise/)) return 'fitness';
  if (lowerDesc.match(/foto|photography|camera|photo/)) return 'photography';
  if (lowerDesc.match(/gunung|mountain|landscape|nature|alam/)) return 'nature';
  if (lowerDesc.match(/fashion|style|ootd|outfit|baju/)) return 'fashion';
  
  return 'lifestyle';
}

export function generateHashtags(description: string): HashtagGroup[] {
  const category = detectCategory(description);
  const categoryTags = hashtagDatabase[category as keyof typeof hashtagDatabase] || hashtagDatabase.lifestyle;
  
  const results: HashtagGroup[] = [
    {
      category: 'Populer',
      tags: [...categoryTags.popular, ...indonesianHashtags.general.slice(0, 3)]
    },
    {
      category: 'Niche',
      tags: [...categoryTags.niche]
    },
    {
      category: 'Trending',
      tags: [...categoryTags.trending, ...indonesianHashtags[category as keyof typeof indonesianHashtags] || indonesianHashtags.general]
    }
  ];
  
  return results;
}
