import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { screen } from '../../theme';

const Container = styled.nav`
  width: 100%;
  height: 64px;
  background-color: #37b9f1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavContainer = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${screen.laptop} {
    width: 50%;
  }
`;

const Nav = styled.li`
  display: inline-block;
  list-style: none;
  flex: 1;
  text-align: center;
  font-weight: 500;
`;

const ModeContainer = styled.div`
  right: 0;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  display: none;
`;

const ModeLabel = styled.label`
  font-size: 12px;
`;

const StyledLink = styled(Link)`
  color: #f7f7fe;
  text-decoration: none;
  font-weight: bold;
`;

export { Container, ModeContainer, ModeLabel, NavContainer, Nav, StyledLink };

// interface LanguageProps {
//   isBold: boolean;
// }

// const LanguageContainer = styled.ul`
//   padding: 0;
//   margin: 0;
// `;

// const Language = styled.li<LanguageProps>`
//   font-weight: ${({ isBold }) => (isBold ? '700' : '400')};
//   display: inline-block;
//   list-style: none;
//   padding: 4px;
//   font-size: 12px;
// `;

// const Copyright = styled.span`
//   width: 300px;
//   position: absolute;
//   bottom: 20px;
//   text-align: center;
// `;
