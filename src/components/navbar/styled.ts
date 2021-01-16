import styled from 'styled-components';

interface LanguageProps {
  isBold: boolean;
}

const Nav = styled.nav`
  width: 300px;
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: inline-flex;
  justify-content: space-between;
  padding: 16px;
`;

const LanguageContainer = styled.ul`
  padding: 0;
  margin: 0;
`;

const Language = styled.li<LanguageProps>`
  font-weight: ${({ isBold }) => (isBold ? '700' : '400')};
  display: inline-block;
  list-style: none;
  padding: 4px;
  font-size: 12px;
`;

const Copyright = styled.span`
  width: 300px;
  position: absolute;
  bottom: 20px;
  text-align: center;
`;

export { Nav, Top, LanguageContainer, Language, Copyright };
