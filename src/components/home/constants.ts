const TAGS: Array<string> = [
  'TypeScript',
  'React',
  'React Native',
  'Ruby',
  'GraphQL',
  'Apollo',
  'Scrum',
  'AWS',
];

interface Contact {
  url: string;
  name: string;
}

const CONTACT_LIST: Array<Contact> = [
  {
    url: 'mailto:youngdeveloper.co@gmail.com',
    name: 'Email',
  },
  {
    url: 'https://t.me/bexuma',
    name: 'Telegram',
  },
  {
    url: 'https://www.linkedin.com/in/bexuma',
    name: 'LinkedIn',
  },
  {
    url: 'https://github.com/bexuma',
    name: 'Github',
  },
];

export { TAGS, CONTACT_LIST };
