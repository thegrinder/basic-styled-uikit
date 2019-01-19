import React from 'react';
import { string, bool } from 'prop-types';
import StyledText from './StyledText';

const propTypes = {
  /** determines the size of the text; one of: l, m, s, xs */
  sizing: string,
  /** one of: white, light, default, dark, black, primary, success, warning, danger */
  color: string,
  /** determines the html tag; one of: p, span */
  as: string,
  /** if true adds a bottom margin according to vertical rhythm */
  marginBottom: bool,
};

const defaultProps = {
  sizing: 'm',
  color: 'default',
  as: 'span',
  marginBottom: false,
};

const Text = ({
  sizing,
  color,
  marginBottom,
  as,
  ...rest
}) => (
  <StyledText
    as={as}
    marginBottom={marginBottom}
    sizing={sizing}
    color={color}
    {...rest}
  />
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
