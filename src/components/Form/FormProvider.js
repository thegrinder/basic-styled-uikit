import { createProvider } from '../../helpers';
import { formBaseTheme, formDarkTheme } from './formTheme';

const FormProvider = createProvider('form', formBaseTheme, formDarkTheme);

export default FormProvider;
