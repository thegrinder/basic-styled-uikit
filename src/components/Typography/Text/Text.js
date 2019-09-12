import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import StyledText from './StyledText';
import { useBoxContext } from '../../Box';

const propTypes = {
  /** determines the size of the text; one of: l, m, s, xs */
  sizing: string,
  /** one of: neutral, primary, success, danger, warning */
  color: string,
  /** one of: high, normal, low */
  emphasis: string,
  /** determines whether colors defined for the background are ignored */
  ignoreBackground: bool,
  /** rendered html tag */
  as: oneOf(['span', 'p']),
  /** if true adds a bottom margin according to vertical rhythm */
  marginBottom: bool,
};

const Text = ({
  sizing = 'm',
  color = 'neutral',
  ignoreBackground = false,
  marginBottom = false,
  emphasis = 'high',
  as = 'span',
  ...rest
}) => (
  <StyledText
    as={as}
    marginBottom={marginBottom}
    sizing={sizing}
    color={color}
    emphasis={emphasis}
    ignoreBackground={ignoreBackground}
    bgColor={useBoxContext()}
    {...rest}
  />
);

Text.propTypes = propTypes;

export default Text;
