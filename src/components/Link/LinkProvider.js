import { createProvider } from '../../helpers';

const minimalTheme = {
  linkTypes: {
    default: {},
  },
};

const LinkProvider = createProvider('link', minimalTheme);

export default LinkProvider;
