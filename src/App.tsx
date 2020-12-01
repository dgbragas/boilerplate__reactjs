import React from 'react';
import { ThemeProvider, Theme } from 'styled-components';

import Routes from './routes';
import GlobalStyles from './styles/global';
import DefaultTheme from './themes/default';

const App: React.FC = () => {
  const theme: Theme = DefaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
