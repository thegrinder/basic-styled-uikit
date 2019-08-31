import React from 'react';
import styled, { css } from 'styled-components';
import { string, number } from 'prop-types';
import { getBoxBgColor, getBoxElevation } from './colorBoxSelectors';

const propTypes = {
  /**
   * one of: neutral0, neutral100, neutral200, neutral300, neutral400,
   * neutral500, neutral600, neutral700, neutral800, neutral900, neutral1000,
   * primary500, success500, danger500, warning500
   * */
  bgColor: string,
  /** one of: 1, 2 */
  elevation: number,
};

const StyledColorBox = styled.div`
  ${({ theme, bgColor, elevation }) => css`
    ${bgColor && `background-color: ${getBoxBgColor(theme, bgColor)};`}
    ${elevation && `box-shadow: ${getBoxElevation(theme, elevation)};`}
  `}
`;

StyledColorBox.propTypes = propTypes;

const ColorBox = props => <StyledColorBox {...props} />;

ColorBox.propTypes = propTypes;

export default ColorBox;
