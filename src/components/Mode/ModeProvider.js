import React, { useCallback, useMemo, useState } from 'react';
import { oneOf, node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ModeContext from './ModeContext';

const propTypes = {
  initialMode: oneOf(['light', 'dark']),
  children: node.isRequired,
};

const ModeProvider = ({ initialMode = 'light', children }) => {
  const [mode, setMode] = useState(initialMode);
  const toggleMode = useCallback(
    () => setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light')),
    []
  );
  const value = useMemo(
    () => ({
      mode,
      toggleMode,
    }),
    [mode, toggleMode]
  );
  return (
    <ModeContext.Provider value={value}>
      <ThemeProvider theme={{ mode }}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};

ModeProvider.propTypes = propTypes;

export default ModeProvider;
