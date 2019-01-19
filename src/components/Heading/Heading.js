import React from 'react';
import { string, bool } from 'prop-types';
import StyledHeading from './StyledHeading';

const propTypes = {
  /** determines the size of the heading; one of: h1, h2, h3, h4, h5, h6 */
  sizing: string,
  /** one of: white, light, default, dark, black, primary, success, warning, danger */
  color: string,
  /** if true adds a bottom margin according to vertical rhythm */
  marginBottom: bool,
  /**
   * determines the html tag and size, if sizing prop is not specified;
   * one of: h1, h2, h3, h4, h5, h6
   * */
  as: string.isRequired,
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
