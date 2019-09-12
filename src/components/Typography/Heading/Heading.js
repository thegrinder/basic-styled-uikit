import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import StyledHeading from './StyledHeading';
import { useBoxContext } from '../../Box';

const propTypes = {
  /** sizings keys in the theme passed to <TypographyProvider /> */
  sizing: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** colors keys in the theme passed to <TypographyProvider /> */
  color: string,
  /** opacities keys in the theme passed to <TypographyProvider /> */
  emphasis: string,
  /** determines whether the color defined for the background is ignored */
  ignoreBackground: bool,
  /** determines the html tag and size, if sizing prop is not specified */
  as: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  /** if true adds a bottom margin according to vertical rhythm */
  marginBottom: bool,
};

const Heading = ({
  color = 'neutral',
  emphasis = 'high',
  marginBottom = false,
  ignoreBackground = false,
  sizing,
  as,
  ...rest
}) => (
  <StyledHeading
    as={as}
    sizing={sizing || as}
    marginBottom={marginBottom}
    color={color}
    emphasis={emphasis}
    ignoreBackground={ignoreBackground}
    bgColor={useBoxContext()}
    {...rest}
  />
);

Heading.propTypes = propTypes;

export default Heading;
