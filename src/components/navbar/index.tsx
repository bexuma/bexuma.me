import { VoidFunctionComponent } from 'react';

import { NAV_LINKS } from './constants';

import { Container, NavContainer, Nav, StyledLink } from './styled';

const Navbar: VoidFunctionComponent = () => (
  <Container>
    <NavContainer>
      {NAV_LINKS.map((nav) => (
        <Nav>
          <StyledLink to={nav.path}>{nav.name}</StyledLink>
        </Nav>
      ))}
    </NavContainer>
  </Container>
);
export default Navbar;
