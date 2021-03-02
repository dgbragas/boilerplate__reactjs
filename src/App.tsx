import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import { GlobalStyles } from './styles/global';
import initial from './styles/themes/initial';

export function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={initial}>
        <GlobalStyles />
      </ThemeProvider>
      <Routes />
    </>
  );
}
