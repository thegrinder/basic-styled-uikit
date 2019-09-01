import React from 'react';
import { string, number } from 'prop-types';

import StyledColorBox from './StyledColorBox';
import { ColorBoxContext } from './context';

const propTypes = {
  /** one of: neutral, primary, success, danger, warning */
  bgColor: string,
  /** one of: 1, 2 */
  elevation: number,
};

const ColorBox = ({ bgColor, elevation, ...rest }) => (
  <ColorBoxContext.Provider value={bgColor}>
    <StyledColorBox bgColor={bgColor} elevation={elevation} {...rest} />
  </ColorBoxContext.Provider>
);

ColorBox.propTypes = propTypes;

export default ColorBox;
