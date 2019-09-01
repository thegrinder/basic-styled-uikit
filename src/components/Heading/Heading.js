import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import StyledHeading from './StyledHeading';

const propTypes = {
  /** determines the size of the heading */
  sizing: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** one of: high, normal, low */
  emphasis: string,
  /** determines the html tag and size, if sizing prop is not specified */
  as: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  /** one of: neutral, primary, success, danger, warning */
  color: string,
  /** if true adds a bottom margin according to vertical rhythm */
  marginBottom: bool,
};

const defaultProps = {
  color: 'default',
  marginBottom: false,
  emphasis: 'high',
};

const Heading = ({
  sizing,
  color,
  emphasis,
  marginBottom,
  as,
  ...rest
}) => (
    <StyledHeading
      as={as}
      sizing={sizing || as}
      marginBottom={marginBottom}
      color={color}
      emphasis={emphasis}
      {...rest}
    />
);

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
