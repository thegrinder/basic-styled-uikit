import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import StyledText from './StyledText';
import { useColorBoxContext } from '../ColorBox/context';

const propTypes = {
  /** determines the size of the text; one of: l, m, s, xs */
  sizing: string,
  /** one of: neutral, primary, success, danger, warning */
  color: string,
  /** one of: high, normal, low */
  emphasis: string,
  /** determines whether we ignore the colors defined for the background */
  ignoreBg: bool,
  /** rendered html tag */
  as: oneOf(['span', 'p']),
  /** if true adds a bottom margin according to vertical rhythm */
  marginBottom: bool,
};

const defaultProps = {
  sizing: 'm',
  color: 'neutral',
  ignoreBg: false,
  as: 'span',
  marginBottom: false,
  emphasis: 'high',
};

const Text = ({
  sizing,
  color,
  ignoreBg,
  marginBottom,
  emphasis,
  as,
  ...rest
}) => {
  const bgColor = useColorBoxContext();
  return (
    <StyledText
      as={as}
      marginBottom={marginBottom}
      sizing={sizing}
      color={color}
      emphasis={emphasis}
      ignoreBg={ignoreBg}
      bgColor={bgColor}
      {...rest}
    />
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
