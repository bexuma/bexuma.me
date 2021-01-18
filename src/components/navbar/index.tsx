import { VoidFunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { NAV_LINKS } from './constants';

import { Container, NavContainer, Nav } from './styled';

const Navbar: VoidFunctionComponent = () => (
  <Container>
    <NavContainer>
      {NAV_LINKS.map((nav) => {
        if (nav.tag === 'link') {
          return (
            <Nav>
              <Link to={nav.path}>{nav.name}</Link>
            </Nav>
          );
        }

        return (
          <Nav>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </Nav>
        );
      })}
    </NavContainer>
  </Container>
);
export default Navbar;
