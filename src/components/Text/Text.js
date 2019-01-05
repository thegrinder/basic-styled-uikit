import React from 'react';
import { string } from 'prop-types';
import StyledText from './StyledText';

const propTypes = {
  sizing: string,
  color: string,
  as: string,
};

const defaultProps = {
  sizing: 'medium',
  color: 'gray800',
  as: 'span',
};

const Text = ({
  sizing,
  color,
  as,
  ...rest
}) => (
  <StyledText
    as={as}
    sizing={sizing}
    color={color}
    {...rest}
  />
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
