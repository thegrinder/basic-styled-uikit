import { createProvider } from '../../helpers';

const minimalTheme = {
  bgColors: {},
  elevations: {},
};

const BoxProvider = createProvider('box', minimalTheme);

export default BoxProvider;
