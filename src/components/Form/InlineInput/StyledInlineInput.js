import { bool } from 'prop-types';
import styled from 'styled-components';
import { baseInputStyles } from '../commonFormStyles';
import { getInlineInputCommonStyle, getInlineInputStyle } from '../formTheme';
import { rem } from '../../../theme/typography';

const propTypes = {
  invalid: bool.isRequired,
  submitting: bool.isRequired,
};

const StyledInlineInput = styled.input(({ theme, invalid, submitting }) => ({
  ...baseInputStyles,
  margin: 0,
  maxWidth: '100%',
  width: '100%',
  overflow: 'visible',
  verticalAlign: 'middle',
  display: 'inline-block',
  borderRadius: rem(theme, 6),
  height: rem(theme, 40),
  padding: `0 ${rem(theme, 10)}`,
  ...getInlineInputCommonStyle(theme),
  ...(submitting && { paddingRight: rem(theme, 36) }),
  ...getInlineInputStyle(theme, invalid, 'normal'),
  '&:hover': {
    ...getInlineInputStyle(theme, invalid, 'hover'),
  },
  '&:focus': {
    outline: 'none',
    ...getInlineInputStyle(theme, invalid, 'active'),
  },
  '&:disabled': {
    ...getInlineInputStyle(theme, invalid, 'disabled'),
  },
}));

StyledInlineInput.propTypes = propTypes;

export default StyledInlineInput;
