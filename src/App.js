import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// STYLES
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, LIGHT, DARK } from './config/theme';
import { GlobalStyles } from "./components/GlobalStyles";

// COMPONENTS
import Navbar from './components/Navbar';

import routes from './routes'

import { useDarkMode } from './customHooks/useDarkMode'

const App = () => {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Fragment>
        <GlobalStyles />
        <Router>
          <Navbar themeToggler={themeToggler} theme={theme} />
          <Switch>
            {routes.map((route) => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component} />
            ))}
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
