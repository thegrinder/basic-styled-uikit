import React, { useMemo } from 'react';
import { object } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { colorBoxBaseTheme, colorBoxDarkTheme } from './colorBoxTheme';
import { useMode } from '../Mode';

const propTypes = {
  baseTheme: object,
  darkTheme: object,
};

const ColorBoxProvider = ({
  baseTheme = colorBoxBaseTheme,
  darkTheme = colorBoxDarkTheme,
  ...rest
}) => {
  const { mode } = useMode();
  const theme = useMemo(
    () => ({
      colorBox: {
        ...baseTheme,
        ...(mode === 'dark' && darkTheme ? darkTheme : {}),
      },
    }),
    [mode]
  );
  return <ThemeProvider theme={theme} {...rest} />;
};

ColorBoxProvider.propTypes = propTypes;

export default ColorBoxProvider;
