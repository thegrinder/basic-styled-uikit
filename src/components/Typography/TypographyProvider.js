import React, { useMemo } from 'react';
import { object } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { typographyBaseTheme, typographyDarkTheme } from './typographyTheme';
import { useMode } from '../Mode';

const propTypes = {
  baseTheme: object,
  darkTheme: object,
};

const TypographyProvider = ({
  baseTheme = typographyBaseTheme,
  darkTheme = typographyDarkTheme,
  ...rest
}) => {
  const { mode } = useMode();
  const theme = useMemo(
    () => ({
      typography: {
        ...baseTheme,
        ...(mode === 'dark' && darkTheme ? darkTheme : {}),
      },
    }),
    [mode]
  );
  return <ThemeProvider theme={theme} {...rest} />;
};

TypographyProvider.propTypes = propTypes;

export default TypographyProvider;
