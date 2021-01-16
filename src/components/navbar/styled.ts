import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  height: 64px;
  background-color: #79e2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavContainer = styled.ul`
  width: 50%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.li`
  display: inline-block;
  list-style: none;
  flex: 1;
  text-align: center;
  color: #172b4d;
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

export { Container, ModeContainer, ModeLabel, NavContainer, Nav };

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
