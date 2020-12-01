import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyles from './styles/global';
import initial from './styles/themes/initial';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={initial}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
