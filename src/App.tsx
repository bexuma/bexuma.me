import { VoidFunctionComponent } from 'react';

import { AppContainer, Container, Tag } from './styled';
import { Navbar } from './components';

const tags: Array<string> = [
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

const App: VoidFunctionComponent = () => (
  <AppContainer>
    <Navbar />
    <Container>
      <section>
        <h1>My name is Bexultan Myrzatayev</h1>

        <p>
          I am a software engineer with a remote working experience building
          servers, web and mobile applications from scratch. I have also turned
          my side project to a profitatble SaaS company.
        </p>

        <p>
          I am currently in a job search. I am a resident of Kazakhstan open for
          relocation. Here is my <a href="https://bexuma.me/resume">resume</a>!
        </p>

        {tags.map((tag: string) => (
          <Tag>{tag}</Tag>
        ))}
      </section>

      <section>
        <h2>Say hi!</h2>
        <a href="mailto:youngdeveloper.co@gmail.com">Email</a>

        <a href="https://t.me/bexuma">Telegram</a>

        <a href="https://www.linkedin.com/in/bexuma">LinkedIn</a>

        <a href="https://github.com/bexuma">Github</a>
      </section>
    </Container>
  </AppContainer>
);

export default App;
