import { VoidFunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Home, Projects } from './components';

// eslint-disable-next-line max-lines-per-function
const App: VoidFunctionComponent = () => (
  <Router>
    <Navbar />

    <Switch>
      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
