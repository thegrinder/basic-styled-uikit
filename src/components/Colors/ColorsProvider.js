import React, { useMemo } from 'react';
import { object } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { baseColorsTheme, darkColorsTheme } from './colorsTheme';
import { useMode } from '../Mode';

const propTypes = {
  baseTheme: object,
  darkTheme: object,
};

const ColorsProvider = ({
  baseTheme = baseColorsTheme,
  darkTheme = darkColorsTheme,
  ...rest
}) => {
  const { mode } = useMode();
  const theme = useMemo(
    () => ({
      colors: {
        ...baseTheme,
        ...(mode === 'dark' && darkTheme ? darkTheme : {}),
      },
    }),
    [mode]
  );
  return <ThemeProvider theme={theme} {...rest} />;
};

ColorsProvider.propTypes = propTypes;

export default ColorsProvider;
