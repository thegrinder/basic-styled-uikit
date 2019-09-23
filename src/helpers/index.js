import React, { useMemo, memo } from 'react';
import { object } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useMode } from '../components/Mode';

export const createSelector = key => theme => theme?.[key];

export const createProvider = key => {
  const propTypes = {
    theme: object,
    darkTheme: object,
  };

  const Provider = ({ theme = {}, darkTheme, ...rest }) => {
    const modeContext = useMode();
    const memoizedTheme = useMemo(
      () => ({
        [key]: {
          ...theme,
          ...(modeContext && modeContext.mode === 'dark' && darkTheme
            ? darkTheme
            : {}),
        },
      }),
      [darkTheme, modeContext, theme]
    );
    return <ThemeProvider theme={memoizedTheme} {...rest} />;
  };

  Provider.propTypes = propTypes;

  return memo(Provider);
};
