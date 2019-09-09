import React, { useCallback, useMemo, useState } from 'react';
import { oneOf } from 'prop-types';
import ModeContext from './ModeContext';

const propTypes = {
  initialMode: oneOf(['light', 'dark']),
};

const ModeProvider = ({ initialMode = 'light', ...rest }) => {
  const [mode, setMode] = useState(initialMode);
  const toggleMode = useCallback(() => setMode(prevMode => !prevMode), []);
  const value = useMemo(
    () => ({
      mode,
      toggleMode,
    }),
    [mode]
  );
  return <ModeContext.Provider value={value} {...rest} />;
};

ModeProvider.propTypes = propTypes;

export default ModeProvider;
