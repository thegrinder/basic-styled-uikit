import React from 'react';
import { string, number } from 'prop-types';

import StyledBox from './StyledBox';
import { BoxContext } from './context';

const propTypes = {
  /** one of: neutral, primary, success, danger, warning */
  bgColor: string,
  /** one of: 1, 2 */
  elevation: number,
};

const Box = ({ bgColor, elevation, ...rest }) => (
  <BoxContext.Provider value={bgColor}>
    <StyledBox bgColor={bgColor} elevation={elevation} {...rest} />
  </BoxContext.Provider>
);

Box.propTypes = propTypes;

export default Box;
