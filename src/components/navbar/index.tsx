import { VoidFunctionComponent } from 'react';

import { Nav, Top, LanguageContainer, Language, Copyright } from './styled';

const Navbar: VoidFunctionComponent = () => (
  <Nav>
    <Top>
      <LanguageContainer>
        <Language isBold={false}>KK</Language>
        <Language isBold>EN</Language>
        <Language isBold={false}>RU</Language>
      </LanguageContainer>
      <div>Mode toggle</div>
    </Top>

    <ul>
      <li>About</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>

    <Copyright>Designed and build by myself</Copyright>
  </Nav>
);

export default Navbar;
