import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { GlobalStyle } from './styled';

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
