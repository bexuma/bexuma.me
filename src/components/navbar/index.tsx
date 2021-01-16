import { useState, VoidFunctionComponent } from 'react';

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
        <Nav>Portfolio</Nav>
        <Nav>Home</Nav>
        <Nav>Resume</Nav>
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
