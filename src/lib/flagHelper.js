// for illustration
// a selection of flags of countries of origin for films currently in DB
export const getRandomFlag = () => {
  const largestFilmIndustryEmojis = [
    '🇮🇳',
    '🇳🇬',
    '🇨🇳',
    '🇯🇵',
    '🇨🇱',
    '🇲🇽',
    '🇳🇿',
    '🇧🇷',
    '🇨🇦',
    '🇪🇬',
    '🇹🇼',
    '🇨🇿',
    '🇿🇦',
    '🇩🇪',
    '🇵🇹',
    '🇨🇺',
    '🇰🇷',
    '🇹🇭',
    '🇦🇺',
    '🇷🇺',
    '🇻🇺',
    '🇮🇹',
    '🇪🇸',
    '🇩🇿',
    '🇩🇰',
  ];
  return largestFilmIndustryEmojis[parseInt(Math.random() * 10)];
};
