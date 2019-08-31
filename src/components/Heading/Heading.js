import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import StyledHeading from './StyledHeading';

const propTypes = {
  /** determines the size of the heading */
  sizing: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** determines the html tag and size, if sizing prop is not specified */
  as: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  /**
   * one of: neutral0, neutral100, neutral200, neutral300, neutral400,
   * neutral500, neutral600, neutral700, neutral800, neutral900, neutral1000,
   * primary500, success500, danger500, warning500
   * */
  color: string,
  /** if true adds a bottom margin according to vertical rhythm */
  marginBottom: bool,
};

const defaultProps = {
  color: 'default',
  marginBottom: false,
};

const Heading = ({
  sizing,
  color,
  marginBottom,
  as,
  ...rest
}) => (
    <StyledHeading
      as={as}
      sizing={sizing || as}
      marginBottom={marginBottom}
      color={color}
      {...rest}
    />
);

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
