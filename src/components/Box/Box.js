import React from 'react';
import { string, number } from 'prop-types';

import StyledBox from './StyledBox';
import { BoxContext } from './context';

const propTypes = {
  /** bgColors keys in the theme passed to <BoxProvider /> */
  bgColor: string,
  /** elevations keys in the theme passed to <BoxProvider /> */
  elevation: number,
};

const Box = ({ bgColor, elevation, ...rest }) => (
  <BoxContext.Provider value={bgColor}>
    <StyledBox bgColor={bgColor} elevation={elevation} {...rest} />
  </BoxContext.Provider>
);

Box.propTypes = propTypes;

export default Box;
