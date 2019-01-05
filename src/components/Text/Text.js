import React from 'react';
import { string } from 'prop-types';
import StyledText from './StyledText';

const propTypes = {
  sizing: string,
  colour: string,
  as: string,
};

const defaultProps = {
  sizing: 'medium',
  colour: 'gray800',
  as: 'span',
};

const Text = ({
  sizing,
  colour,
  as,
  ...rest
}) => (
  <StyledText
    as={as}
    sizing={sizing}
    colour={colour}
    {...rest}
  />
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
