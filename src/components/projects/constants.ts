interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: Array<string>;
  year: number;
  projectLink?: string;
  githubLink?: string;
}

const PROJECT_LIST: Array<Project> = [
  {
    title: 'YS Service Center',
    description:
      'My hobby project – an electronic document management system (EDMS) for university student service centers, which has eventually turned into a SaaS company 💰',
    imageUrl: '',
    tags: ['React', 'Ruby', 'GraphQL', 'AWS', 'Kendo'],
    year: 2019,
    projectLink: 'https://sc.youngstudent.co',
  },
  {
    title: 'Sliding Puzzle',
    description:
      'A nostalgy project from the 1st year of NYU CS course, which I built while battling the coronavirus 🦠',
    imageUrl: '',
    tags: ['React'],
    year: 2020,
    projectLink: 'https://my-sliding-puzzle.netlify.app',
    githubLink: 'toBeAdded',
  },
  {
    title: 'Eurasian Tech Shop',
    description:
      'An intrapreneurial initiative of the former Kazakhmys Corporation employee to create a prototype for the spare parts wholesale B2B online store 🚀',
    imageUrl: '',
    tags: ['React', 'React Native', 'GraphQL'],
    year: 2020,
  },
  {
    title: 'Listen Instead',
    description:
      'Open your ears, and listen to your favourite articles in a human voice. Tune into recent content from your favourite sources through the built-in player with speed & sound control 🎧',
    imageUrl: '',
    tags: ['JavaScript', 'React Native', 'Expo AV API, Redux'],
    year: 2019,
  },
  {
    title: 'One Page Resume',
    description:
      'My first ever deployed web page which had landed me an interview and a job offer. I had built it under 5 hours by following the Cupcakes tutorial on Udemy 📚',
    imageUrl: '',
    tags: ['HTML5', 'CSS3', 'jQuery'],
    year: 2016,
    projectLink: 'https://bexuma.github.io/about-me/',
    githubLink: 'https://github.com/bexuma/about-me',
  },
];

export { PROJECT_LIST };
