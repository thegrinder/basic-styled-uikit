import React, { useCallback, useMemo, useState } from 'react';
import { oneOf } from 'prop-types';
import ModeContext from './ModeContext';

const propTypes = {
  initialMode: oneOf(['light', 'dark']),
};

const defaultProps = {
  initialMode: 'light',
};

const ModeProvider = ({ initialMode, ...rest }) => {
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
ModeProvider.defaultProps = defaultProps;

export default ModeProvider;
