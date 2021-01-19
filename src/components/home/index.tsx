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
  ContactContainer,
} from './styled';
import { CONTACT_LIST, TAGS } from './constants';
import { Wrapper, Header } from '../../styled';
import { images } from '../../assets';

const AboutMe: VoidFunctionComponent = () => (
  <section>
    <h2>About me</h2>
    <p>
      I am a software engineer who builds <Bold>servers</Bold>, <Bold>web</Bold>{' '}
      and <Bold>mobile apps</Bold> from scratch. I have also turned my side
      project into a profitable SaaS company.
    </p>
    <p>
      I am currently in a <Bold>job search</Bold>. I am a resident of Kazakhstan
      looking for <Bold>front-end</Bold> and <Bold>full-stack</Bold> remote
      positions in a product company. Here is my{' '}
      <a
        href={`${process.env.PUBLIC_URL}/resume.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        resume
      </a>
      !
    </p>
    <TagContainer>
      {TAGS.map((tag: string) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagContainer>
  </section>
);

const Contacts: VoidFunctionComponent = () => (
  <ContactContainer>
    <h2>Contacts</h2>
    {CONTACT_LIST.map((contact) => (
      <a key={contact.name} href={contact.url} target="_blank" rel="noreferrer">
        {contact.name}
      </a>
    ))}
  </ContactContainer>
);

const Selfie: VoidFunctionComponent = () => (
  <PortraitContainer>
    <Portrait src={images.portrait} alt="Portait" />
    <Alt>
      A casual selfie made during my sophomore year.
      <br />
      Had been extremely busy configuring APIs, had no time to get my hair cut
    </Alt>
  </PortraitContainer>
);

const Home: VoidFunctionComponent = () => (
  <Wrapper>
    <Header>
      Sálem
      <Tooltip>
        <Superscript>[?]</Superscript>
        <TooltipText>
          Sálem stands for &#39;Hi&#39; in Kazakh language. Beware, it is an
          informal greeting; do not accidentally say it to someone&#39;s granny!
        </TooltipText>
      </Tooltip>
    </Header>

    <BioContainer>
      <Bio>
        <p>My name is Bexultan Myrzatayev. Welcome to my website!</p>
        <AboutMe />
        <Contacts />
      </Bio>

      <Selfie />
    </BioContainer>
  </Wrapper>
);
export default Home;
