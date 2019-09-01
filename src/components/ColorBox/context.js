import { createContext, useContext } from 'react';

export const ColorBoxContext = createContext(undefined);

export const useColorBoxContext = () => useContext(ColorBoxContext);
