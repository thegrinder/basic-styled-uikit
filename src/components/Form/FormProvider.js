import { createProvider } from '../../helpers';

export const minimalTheme = {
  regular: {
    states: {
      valid: {
        normal: {},
      },
      invalid: {},
    },
  },
  inline: {
    states: {
      valid: {
        normal: {},
      },
      invalid: {},
    },
  },
  misc: {
    states: {
      valid: {
        normal: {},
      },
      invalid: {},
    },
  },
  toggle: {
    states: {
      normal: {},
      checked: {},
    },
  },
};

const FormProvider = createProvider('form', minimalTheme);

export default FormProvider;
