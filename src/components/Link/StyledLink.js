import styled from 'styled-components';
import {
  string,
  oneOf,
  oneOfType,
  func,
} from 'prop-types';
import { getTextSizingStyle } from '../Text/textTheme';
import { getLinkTypeStyle, getLinkCommonStyle } from './linkTheme';

const propTypes = {
  sizing: string.isRequired,
  linktype: string.isRequired,
  as: oneOfType([oneOf(['a', 'button']), func]).isRequired,
};

const StyledLink = styled.a(({ linktype, sizing, theme }) => ({
  margin: 0,
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
  overflow: 'visible',
  boxSizing: 'border-box',
  display: 'inline-block',
  verticalAlign: 'middle',
  outline: 'none',
  cursor: 'pointer',
  touchAction: 'manipulation',
  textDecoration: 'none',
  fontFamily: 'inherit',
  ...getLinkCommonStyle(theme),
  ...getLinkTypeStyle(theme, linktype, 'normal'),
  ...getTextSizingStyle(theme, sizing),
  '&: hover': {
    ...getLinkTypeStyle(theme, linktype, 'hover'),
    outline: 'none',
    textDecoration: 'underline',
  },
}));

StyledLink.propTypes = propTypes;

export default StyledLink;
