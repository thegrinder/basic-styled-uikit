import React, { useMemo } from 'react';
import { object } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useMode } from '../components/Mode';

const createProvider = (key, defaultTheme, defaultDarkTheme) => {
  const propTypes = {
    theme: object,
    darkTheme: object,
  };

  const Provider = ({
    theme = defaultTheme,
    darkTheme = defaultDarkTheme,
    ...rest
  }) => {
    const { mode } = useMode();
    const memoizedTheme = useMemo(
      () => ({
        [key]: {
          ...theme,
          ...(mode === 'dark' && darkTheme ? darkTheme : {}),
        },
      }),
      [mode]
    );
    return <ThemeProvider theme={memoizedTheme} {...rest} />;
  };

  Provider.propTypes = propTypes;

  return Provider;
};

export default createProvider;
