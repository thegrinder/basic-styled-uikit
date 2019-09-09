import React, { useMemo } from 'react';
import { object } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { formBaseTheme, formDarkTheme } from './formTheme';
import { useMode } from '../Mode';

const propTypes = {
  baseTheme: object,
  darkTheme: object,
};

const FormProvider = ({
  baseTheme = formBaseTheme,
  darkTheme = formDarkTheme,
  ...rest
}) => {
  const { mode } = useMode();
  const theme = useMemo(
    () => ({
      form: {
        ...baseTheme,
        ...(mode === 'dark' && darkTheme ? darkTheme : {}),
      },
    }),
    [mode]
  );
  return <ThemeProvider theme={theme} {...rest} />;
};

FormProvider.propTypes = propTypes;

export default FormProvider;
