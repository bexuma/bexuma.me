import { VoidFunctionComponent } from 'react';

import { PROJECT_LIST } from './constants';
import { Project, TagContainer, Tag, LinkContainer } from './styled';
import { Wrapper, Header } from '../../styled';

const Portfolio: VoidFunctionComponent = () => (
  <Wrapper>
    <Header>Projects</Header>
    {PROJECT_LIST.map((project) => (
      <Project key={project.title}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <TagContainer>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>

        <LinkContainer>
          {project.projectLink && (
            <a href={project.projectLink} target="_blank" rel="noreferrer">
              Project
            </a>
          )}

          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              Github
            </a>
          )}
        </LinkContainer>
      </Project>
    ))}
  </Wrapper>
);

export default Portfolio;
