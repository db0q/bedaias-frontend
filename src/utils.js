import rtlCssJs from 'rtl-css-js';

export const setTextDirection = () => {
  const langDir = rtlCssJs.getLangDir();

  document.documentElement.dir = langDir;
};