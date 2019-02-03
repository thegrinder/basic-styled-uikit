import styled from 'styled-components';
import { node, string } from 'prop-types';
import { rem } from '../../theme/typography';
import {
  getBtnTypeStyle,
  getBtnSizeStyle,
  getBtnCommonStyle,
} from './buttonTheme';

const propTypes = {
  btntype: string.isRequired,
  btnsize: string.isRequired,
  left: node,
  right: node,
};

const StyledButton = styled.button(({
  theme,
  btntype,
  btnsize,
  left,
  right,
}) => ({
  margin: 0,
  border: 'none',
  overflow: 'visible',
  boxSizing: 'border-box',
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'middle',
  textAlign: 'center',
  textDecoration: 'none',
  transition: '.1s ease-in-out',
  transitionProperty: 'color, background-color, border-color',
  touchAction: 'manipulation',
  cursor: 'pointer',
  outline: 'none',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: rem(theme, 6),
  ...getBtnCommonStyle(theme),
  ...getBtnTypeStyle(theme, btntype, 'normal'),
  ...getBtnSizeStyle(theme, btnsize),
  ...(left && { paddingLeft: 0 }),
  ...(right && { paddingRight: 0 }),
  '&:hover': {
    ...getBtnTypeStyle(theme, btntype, 'hover'),
  },
  '&:focus': {
    ...getBtnTypeStyle(theme, btntype, 'hover'),
  },
  '&:active': {
    ...getBtnTypeStyle(theme, btntype, 'active'),
  },
  '&:disabled': {
    ...getBtnTypeStyle(theme, btntype, 'normal'),
    opacity: 0.6,
    cursor: 'default',
  },
}));

StyledButton.propTypes = propTypes;

export default StyledButton;
