import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './app';
import { GlobalStyle, theme } from './styled';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
