/* eslint-disable no-shadow */
import styled, { createGlobalStyle, DefaultTheme } from 'styled-components';

import { screen } from './theme';

const mardiGras = '#100f10';
const ghostWhite = '#f7f7fe';
const summerSky = '#37b9f1';
const pacificBlue = '#00A3BF';

const theme: DefaultTheme = {
  colors: {
    navigation: summerSky,
    font: mardiGras,
    primary: pacificBlue,
    background: ghostWhite,
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.font};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  p {
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: calc(100% - 30px);

  padding-top: 16px;

  @media ${screen.landscape} {
    max-width: 540px;
  }

  @media ${screen.tablet} {
    max-width: 720px;
  }

  @media ${screen.laptop} {
    max-width: 960px;
    padding-top: 48px;
  }

  @media ${screen.desktop} {
    max-width: 1140px;
  }
`;

const Header = styled.h1`
  text-align: center;
  font-size: 1.65em;

  @media ${screen.tablet} {
    font-size: 1.7em;
  }

  @media ${screen.laptop} {
    font-size: 1.8em;
  }

  @media ${screen.desktop} {
    font-size: 2em;
  }
`;

export { GlobalStyle, Wrapper, Header, theme };
