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

const defaultProps = {
  color: 'neutral',
  emphasis: 'high',
  ignoreBackground: false,
  marginBottom: false,
};

const Heading = ({
  sizing,
  color,
  emphasis,
  marginBottom,
  as,
  ignoreBackground,
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
Heading.defaultProps = defaultProps;

export default Heading;
