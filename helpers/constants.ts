export interface Link {
  id: number;
  link: string;
  title?: string;
}

export const headerLinks: Link[] = [
  {
    id: 1,
    link: 'phones',
  },
  {
    id: 2,
    link: 'tablets',
  },
  {
    id: 3,
    link: 'accessories',
  },
];

export const footerLinks: Link[] = [
  {
    id: 1,
    link: 'https://github.com/NadieinOleh',
    title: 'Github',
  },
  {
    id: 2,
    link: 'https://t.me/Nadiein_Oleh',
    title: 'Contacts',
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/oleh-nadiein-764a96175/',
    title: 'Powered by Oleh Nadiein',
  },
];
