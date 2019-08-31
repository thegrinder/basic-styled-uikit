import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import StyledText from './StyledText';

const propTypes = {
  /** determines the size of the text; one of: l, m, s, xs */
  sizing: string,
  /**
   * one of: neutral0, neutral50, neutral100, neutral200, neutral300, neutral400,
   * neutral500, neutral600, neutral700, neutral800, neutral900, neutral1000,
   * primary500, success500, danger500, warning500
   * */
  color: string,
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
