export const menuCategories = [
  { id: 'craveables', number: '01', title: 'The Craveables', intro: 'Start with a little something.', items: [
    { name: 'Spicy Tuna Sushi Rolls', description: 'A signature sushi favourite with a lively kick.', label: 'SIGNATURE' },
    { name: 'Inari Sushi', description: 'Seasoned tofu pockets with a Japanese-inspired touch.', label: 'A CLASSIC' },
    { name: 'Dumplings', description: 'Little parcels made for sharing.' },
  ]},
  { id: 'mains', number: '02', title: 'The Mains', intro: 'Settle in. Make it a meal.', items: [
    { name: 'Asian-inspired Pasta', description: 'A familiar comfort with a flavour-led twist.' },
    { name: 'Stir-fries', description: 'Wok-inspired plates with layered flavour.' },
  ]},
  { id: 'sips', number: '03', title: 'The Crafted Sips', intro: 'One more reason to linger.', items: [
    { name: 'Artisanal Breakfast & Stacked Pancakes', description: 'A considered start to the day, with beautifully stacked pancakes.' },
    { name: 'Specialty Pour-over Coffee', description: 'Thoughtful coffee for slow mornings and longer conversations.' },
    { name: 'Signature Cocktails & Mocktails', description: 'Something special, with or without a spirit.' },
  ]},
] as const;
