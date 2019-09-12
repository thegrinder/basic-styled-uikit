import { createContext, useContext } from 'react';

export const BoxContext = createContext(undefined);

export const useBoxContext = () => useContext(BoxContext);
