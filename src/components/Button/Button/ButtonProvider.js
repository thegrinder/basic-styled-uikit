import { createProvider } from '../../../helpers';
import { buttonBaseTheme, buttonDarkTheme } from './buttonTheme';

const ButtonProvider = createProvider(
  'button',
  buttonBaseTheme,
  buttonDarkTheme
);

export default ButtonProvider;
