import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import StyledHeading from './StyledHeading';
import { useColorBoxContext } from '../../ColorBox';

const propTypes = {
  /** determines the size of the heading */
  sizing: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** one of: high, normal, low */
  emphasis: string,
  /** determines whether colors defined for the background are ignored */
  ignoreBackground: bool,
  /** determines the html tag and size, if sizing prop is not specified */
  as: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  /** one of: neutral, primary, success, danger, warning */
  color: string,
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
    bgColor={useColorBoxContext()}
    {...rest}
  />
);

Heading.propTypes = propTypes;

export default Heading;
