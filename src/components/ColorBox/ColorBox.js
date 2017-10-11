import React from 'react';
import { string, node } from 'prop-types';
import StyledColorBox from './StyledColorBox';

const propTypes = {
  bgColor: string,
  borderColor: string,
  tagName: string,
  className: string,
  children: node,
};

const defaultProps = {
  bgColor: 'lightGray',
  borderColor: 'gray',
  tagName: 'div',
};

function ColorBox({
  bgColor, borderColor, tagName, className, children,
}) {
  const SpecificColorBox = StyledColorBox.withComponent(tagName);
  return (
    <SpecificColorBox bgColor={bgColor} borderColor={borderColor} className={className}>
      {children}
    </SpecificColorBox>
  );
}

ColorBox.propTypes = propTypes;
ColorBox.defaultProps = defaultProps;

export default ColorBox;
