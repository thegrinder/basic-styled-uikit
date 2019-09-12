import { createProvider } from '../../helpers';

const minimalTheme = {
  btnTypes: {
    default: {},
  },
  sizings: {
    m: {},
  },
};

const ButtonProvider = createProvider('button', minimalTheme);

export default ButtonProvider;
