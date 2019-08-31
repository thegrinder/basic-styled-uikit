import React from 'react';
import { string, number } from 'prop-types';

import StyledColorBox from './StyledColorBox';

const propTypes = {
  /** one of: neutral, primary, success, danger, warning */
  bgColor: string,
  /** one of: 1, 2 */
  elevation: number,
};

const ColorBox = props => <StyledColorBox {...props} />;

ColorBox.propTypes = propTypes;

export default ColorBox;
