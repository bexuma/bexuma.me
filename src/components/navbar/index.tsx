import { useState, VoidFunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  ModeContainer,
  ModeLabel,
  NavContainer,
  Nav,
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
          <Link to="/portfolio">Portfolio</Link>
        </Nav>

        <Nav>
          <Link to="/">Home</Link>
        </Nav>
        <Nav>
          <Link to="/resume">Resume</Link>
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
