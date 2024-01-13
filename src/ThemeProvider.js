// ThemeProvider.js
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';

const theme = {
  direction: 'ltr',
};

const rtlProps = {
  right: 'left',
  left: 'right',
};

const RTLThemeProvider = ({ children }) => (
  <StyledThemeProvider
    theme={{
      ...theme,
      switch: switchProp('direction', rtlProps),
      ifRtl: ifProp('theme.direction', 'rtl'),
    }}
  >
    {children}
  </StyledThemeProvider>
);

export default RTLThemeProvider;
