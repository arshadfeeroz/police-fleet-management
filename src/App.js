import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import 'typeface-roboto';

import Router from './router';

function App() {
  return (
    <StylesProvider injectFirst>
      {/* <ThemeProvider theme={theme}> */}
        <Router />
      {/* </ThemeProvider> */}
    </StylesProvider>
  );
}

export default App;
