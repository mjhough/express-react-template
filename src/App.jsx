import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './components/public/home/Home';
import About from './components/public/about/About';
import { NavBar } from './components/public/shared';
import muiTheme from './style/muiTheme';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
);

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={muiTheme}>
      <NavBar />
      <Main />
    </MuiThemeProvider>
  </React.Fragment>
);

export default App;

