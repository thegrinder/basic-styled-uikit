import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import StyledText from './StyledText';
import { useBoxContext } from '../../Box';

const propTypes = {
  /** sizings keys in the theme passed to <TypographyProvider /> */
  sizing: string,
  /** colors keys in the theme passed to <TypographyProvider /> */
  color: string,
  /** opacities keys in the theme passed to <TypographyProvider /> */
  emphasis: string,
  /** determines whether the color defined for the background is ignored */
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
