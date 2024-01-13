// withRTL.js
import React from 'react';
import RTLThemeProvider from './ThemeProvider';

const withRTL = (Component) => (props) => (
  <RTLThemeProvider>
    <Component {...props} />
  </RTLThemeProvider>
);

export default withRTL;
