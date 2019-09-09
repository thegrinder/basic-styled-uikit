import React, { useMemo } from 'react';
import { object } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { linkBaseTheme, linkDarkTheme } from './linkTheme';
import { useMode } from '../Mode';

const propTypes = {
  baseTheme: object,
  darkTheme: object,
};

const LinkProvider = ({
  baseTheme = linkBaseTheme,
  darkTheme = linkDarkTheme,
  ...rest
}) => {
  const { mode } = useMode();
  const theme = useMemo(
    () => ({
      link: {
        ...baseTheme,
        ...(mode === 'dark' && darkTheme ? darkTheme : {}),
      },
    }),
    [mode]
  );
  return <ThemeProvider theme={theme} {...rest} />;
};

LinkProvider.propTypes = propTypes;

export default LinkProvider;
