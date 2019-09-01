import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import StyledText from './StyledText';

const propTypes = {
  /** determines the size of the text; one of: l, m, s, xs */
  sizing: string,
  /** one of: neutral, primary, success, danger, warning */
  color: string,
  /** one of: high, normal, low */
  emphasis: string,
  /** rendered html tag */
  as: oneOf(['span', 'p']),
  /** if true adds a bottom margin according to vertical rhythm */
  marginBottom: bool,
};

const defaultProps = {
  sizing: 'm',
  color: 'default',
  as: 'span',
  marginBottom: false,
  emphasis: 'high',
};

const Text = ({
  sizing,
  color,
  marginBottom,
  emphasis,
  as,
  ...rest
}) => (
    <StyledText
      as={as}
      marginBottom={marginBottom}
      sizing={sizing}
      color={color}
      emphasis={emphasis}
      {...rest}
    />
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
