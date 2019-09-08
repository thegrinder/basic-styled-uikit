import { useContext } from 'react';
import ModeContext from './ModeContext';

const useMode = () => {
  const mode = useContext(ModeContext);
  if (!mode) {
    throw new Error('useMode can be used only within <ModeProvider /> context');
  }
  return mode;
};

export default useMode;
