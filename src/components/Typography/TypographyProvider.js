import { createProvider } from '../../helpers';
import { typographyBaseTheme, typographyDarkTheme } from './typographyTheme';

const TypographyProvider = createProvider(
  'typography',
  typographyBaseTheme,
  typographyDarkTheme
);

export default TypographyProvider;
