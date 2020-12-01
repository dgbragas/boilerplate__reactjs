import React from 'react';
import { ThemeProvider, Theme } from 'styled-components';

import DefaultTheme from './themes/default';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const theme: Theme = DefaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
