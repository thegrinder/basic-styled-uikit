import React from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { getBoxBgColor, getBoxBorderColor } from './colorBoxHelpers';

const propTypes = {
  /**
   * one of: transparent, inherit, white, lightest, lighter, light, normal, dark, darker, darkest,
   * washedPrimary, primary, washedSuccess, success, washedDanger, danger, washedWarning, warning
   * */
  bgColor: string,
  /** one of: transparent, white, light, normal, dark, primary, success, warning, danger */
  borderColor: string,
};

const StyledColorBox = styled.div`
  ${({ theme, bgColor, borderColor }) => css`
    ${bgColor && `background-color: ${getBoxBgColor(theme, bgColor)};`}
    ${borderColor && `border-color: ${getBoxBorderColor(theme, borderColor)};`}
  `}
`;

StyledColorBox.propTypes = propTypes;

const ColorBox = props => <StyledColorBox {...props} />;

ColorBox.propTypes = propTypes;

export default ColorBox;
