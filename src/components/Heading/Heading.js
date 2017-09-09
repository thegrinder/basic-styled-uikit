import React from 'react';
import { string, node } from 'prop-types';
import StyledHeading from './StyledHeading';

const propTypes = {
  sizing: string.isRequired,
  children: node.isRequired,
  tagName: string,
  className: string,
};

function Heading({ tagName, sizing, children, className }) {
  const SpecificHeading = StyledHeading.withComponent(tagName || sizing);
  return (
    <SpecificHeading sizing={sizing} className={className}>
      {children}
    </SpecificHeading>
  );
}

Heading.propTypes = propTypes;

export default Heading;
