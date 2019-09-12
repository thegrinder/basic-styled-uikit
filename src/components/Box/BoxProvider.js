import { createProvider } from '../../helpers';
import { boxBaseTheme, boxDarkTheme } from './boxTheme';

const BoxProvider = createProvider('box', boxBaseTheme, boxDarkTheme);

export default BoxProvider;
