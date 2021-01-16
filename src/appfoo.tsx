import { VoidFunctionComponent } from 'react';

import { AppContainer, Container } from './styled';
import { Navbar, Home } from './components';

// eslint-disable-next-line max-lines-per-function
const App: VoidFunctionComponent = () => (
  <AppContainer>
    <Navbar />
    <Container>
      <Home />
    </Container>
  </AppContainer>
);

export default App;
