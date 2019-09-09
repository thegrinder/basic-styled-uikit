import { createProvider } from '../../helpers';
import { linkBaseTheme, linkDarkTheme } from './linkTheme';

const LinkProvider = createProvider('link', linkBaseTheme, linkDarkTheme);

export default LinkProvider;
