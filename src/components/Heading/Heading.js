import React from 'react';
import { string, node } from 'prop-types';
import StyledHeading from './StyledHeading';

const propTypes = {
  sizing: string.isRequired,
  tagName: string,
  colour: string,
  className: string,
  children: node.isRequired,
};

const defaultProps = {
  colour: 'dark',
};

function Heading({ tagName, sizing, children, className, colour }) {
  const SpecificHeading = StyledHeading.withComponent(tagName || sizing);
  return (
    <SpecificHeading colour={colour} sizing={sizing} className={className}>
      {children}
    </SpecificHeading>
  );
}

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
