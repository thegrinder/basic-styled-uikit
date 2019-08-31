import React from 'react';
import styled, { css } from 'styled-components';
import { string, number } from 'prop-types';
import { getBoxBgColor, getBoxElevation } from './colorBoxSelectors';

const propTypes = {
  /**
   * one of: white, lightest, lighter, light, normal, dark, darker, darkest,
   * primary, success, danger, warning
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
