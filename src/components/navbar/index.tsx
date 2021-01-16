import { useState, VoidFunctionComponent } from 'react';

import {
  Container,
  ModeContainer,
  ModeLabel,
  NavContainer,
  Nav,
  StyledLink,
} from './styled';

const Navbar: VoidFunctionComponent = () => {
  const [isDark, setIsDark] = useState(false);

  const handleModeChange = () => {
    setIsDark(!isDark);
  };

  return (
    <Container>
      <NavContainer>
        <Nav>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
        </Nav>

        <Nav>
          <StyledLink to="/">Home</StyledLink>
        </Nav>
        <Nav>
          <StyledLink to="/resume">Resume</StyledLink>
        </Nav>
      </NavContainer>

      <ModeContainer>
        <ModeLabel htmlFor="darkMode">Toggle Mode</ModeLabel>

        <input
          type="checkbox"
          checked={isDark}
          onChange={handleModeChange}
          id="darkMode"
        />
      </ModeContainer>
    </Container>
  );
};
export default Navbar;
