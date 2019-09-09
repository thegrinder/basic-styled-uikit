import React, { useMemo } from 'react';
import { object } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useMode } from '../components/Mode';

const createProvider = (key, defaultBaseTheme, defaultDarkTheme) => {
  const propTypes = {
    baseTheme: object,
    darkTheme: object,
  };

  const Provider = ({
    baseTheme = defaultBaseTheme,
    darkTheme = defaultDarkTheme,
    ...rest
  }) => {
    const { mode } = useMode();
    const theme = useMemo(
      () => ({
        [key]: {
          ...baseTheme,
          ...(mode === 'dark' && darkTheme ? darkTheme : {}),
        },
      }),
      [mode]
    );
    return <ThemeProvider theme={theme} {...rest} />;
  };

  Provider.propTypes = propTypes;

  return Provider;
};

export default createProvider;
