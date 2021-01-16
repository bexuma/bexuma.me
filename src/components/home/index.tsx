import { VoidFunctionComponent } from 'react';

import { Container, Bio, Portrait, Tag, Underline } from './styled';
import portrait from './portrait.jpg';

const tags: Array<string> = [
  'TypeScript',
  'JavaScript',
  'React',
  'React Native',
  'GraphQL',
  'Apollo',
  'Ruby',
  'SQL',
  'Scrum',
  'Remote',
];

// eslint-disable-next-line max-lines-per-function
const Home: VoidFunctionComponent = () => (
  <Container>
    <h1 style={{ textAlign: 'center' }}>Sàlem</h1>

    <Bio>
      <div>
        <p>
          My name is Bexultan Myrzatayev. This is my personal website.
          #workInProgress
        </p>

        <h2>About me</h2>

        <p>
          I am a software engineer with a remote working experience building up{' '}
          <Underline>
            servers, web and mobile applications from scratch
          </Underline>
          . I have also turned my side project to a profitatble SaaS company.
        </p>

        <p>
          I am currently in a job search. I am a resident of Kazakhstan open for
          relocation. Here is my <a href="https://bexuma.me/resume">resume</a>!
        </p>

        {tags.map((tag: string) => (
          <Tag>{tag}</Tag>
        ))}

        <h2>Say hi!</h2>
        <a href="mailto:youngdeveloper.co@gmail.com">Email</a>

        <a href="https://t.me/bexuma">Telegram</a>

        <a href="https://www.linkedin.com/in/bexuma">LinkedIn</a>

        <a href="https://github.com/bexuma">Github</a>
      </div>

      <Portrait src={portrait} alt="Portait" />
    </Bio>
  </Container>
);

export default Home;
