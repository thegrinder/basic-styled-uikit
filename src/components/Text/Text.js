import React from 'react';
import { string, bool } from 'prop-types';
import StyledText from './StyledText';

const propTypes = {
  sizing: string,
  color: string,
  as: string,
  marginBottom: bool,
};

const defaultProps = {
  sizing: 't2',
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
