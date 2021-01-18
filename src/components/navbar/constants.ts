interface Link {
  path: string;
  name: string;
  tag: 'link' | 'a';
}

const NAV_LINKS: Array<Link> = [
  { path: '/projects', name: 'Projects', tag: 'link' },
  { path: '/', name: 'Home', tag: 'link' },
  { path: '/resume.pdf', name: 'Resume', tag: 'a' },
];

export { NAV_LINKS };
