import { VoidFunctionComponent } from 'react';

import {
  BioContainer,
  Bio,
  PortraitContainer,
  Portrait,
  Alt,
  TagContainer,
  Tag,
  Bold,
  Superscript,
  Tooltip,
  TooltipText,
} from './styled';
import portrait from './portrait.jpg';
import { TAGS } from './constants';
import { Wrapper, Header } from '../../styled';

// eslint-disable-next-line max-lines-per-function
const Home: VoidFunctionComponent = () => (
  <Wrapper>
    <Header>
      Sálem
      <Tooltip>
        <Superscript>[?]</Superscript>
        <TooltipText>
          Sálem means &#39;Hi&#39; in Kazakh. Beware, it is an informal
          greeting, do not say it to someone&#39;s granny! 😉
        </TooltipText>
      </Tooltip>
    </Header>

    <BioContainer>
      <Bio>
        <p>
          My name is Bexultan Myrzatayev. Welcome to my personal website!{' '}
          <Bold>#WIP</Bold>
        </p>
        <h2>About me</h2>
        <p>
          I am a software engineer building up <Bold>servers</Bold>,{' '}
          <Bold>web</Bold> and <Bold>mobile</Bold> applications from scratch. I
          have also turned my side project to a profitatble SaaS company.
        </p>
        <p>
          I am currently in a <Bold>job search</Bold>. I am a resident of
          Kazakhstan open for both remote work (GMT+6) and relocation. Here is
          my <a href="https://bexuma.me/resume">resume</a>!
        </p>
        <TagContainer>
          {TAGS.map((tag: string) => (
            <Tag>{tag}</Tag>
          ))}
        </TagContainer>
        <h2>Contacts</h2>
        <a href="mailto:youngdeveloper.co@gmail.com">Email</a>{' '}
        <a href="https://t.me/bexuma">Telegram</a>{' '}
        <a href="https://www.linkedin.com/in/bexuma">LinkedIn</a>{' '}
        <a href="https://github.com/bexuma">Github</a>
      </Bio>

      <PortraitContainer>
        <Portrait src={portrait} alt="Portait" />
        <Alt>
          A casual selfie made during my sophomore year.
          <br />
          Had been extremely busy configuring APIs, had no time for a
          hairdresser
        </Alt>
      </PortraitContainer>
    </BioContainer>
  </Wrapper>
);
export default Home;
