export const site = {
  name: 'Inari Kicchin',
  description: 'A taste of Asia in the heart of Nairobi. Contemporary Asian fusion with a Japanese soul.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || 'https://example.com').replace(/\/$/, ''),
  nav: [{ label: 'Home', href: '/' }, { label: 'Our story', href: '/story/' }, { label: 'The menu', href: '/menu/' }, { label: 'Gallery', href: '/gallery/' }, { label: 'Find us', href: '/visit/' }],
  brandLine: 'Where every bite tells a story. Where every visit feels special.',
  location: 'Mvuli Road, Westlands, Nairobi, Kenya',
};
