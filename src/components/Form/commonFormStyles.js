import { rem } from '../../helpers/utils';
import {
  getRegularInputCommonStyle,
  getRegularInputStyle,
  getMiscInputCommonStyle,
  getMiscInputStyle,
} from './formTheme';

export const baseInputStyles = {
  appearance: 'none',
  touchAction: 'manipulation',
  boxSizing: 'border-box',
  borderWidth: '1px',
  borderStyle: 'solid',
  transition: '.2s ease-in-out',
  transitionProperty: 'color, background-color, border',
};

export const getSharedInputStyles = (theme, invalid) => ({
  ...baseInputStyles,
  margin: 0,
  maxWidth: '100%',
  width: '100%',
  borderRadius: rem(theme, 6),
  ...getRegularInputCommonStyle(theme),
  ...getRegularInputStyle(theme, invalid, 'normal'),
  '&:focus': {
    outline: 'none',
    ...getRegularInputStyle(theme, invalid, 'active'),
  },
  '&:disabled': {
    ...getRegularInputStyle(theme, invalid, 'disabled'),
  },
});

export const getSharedMiscInputStyles = (theme, invalid) => ({
  ...baseInputStyles,
  overflow: 'hidden',
  padding: 0,
  display: 'inline-block',
  height: rem(theme, 24),
  width: rem(theme, 24),
  marginTop: rem(theme, -4),
  verticalAlign: 'middle',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
  borderStyle: 'solid',
  cursor: 'pointer',
  ...getMiscInputCommonStyle(theme),
  ...getMiscInputStyle(theme, invalid, 'normal'),
  '&:focus': {
    outline: 'none',
    ...getMiscInputStyle(theme, invalid, 'active'),
  },
  '&:checked': {
    ...getMiscInputStyle(theme, invalid, 'checked'),
  },
  '&:disabled': {
    cursor: 'default',
    opacity: 0.6,
  },
});
