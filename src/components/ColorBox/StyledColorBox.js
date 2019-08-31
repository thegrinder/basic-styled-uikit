import styled, { css } from 'styled-components';
import { string, number } from 'prop-types';
import { getBoxBgColor, getBoxElevation } from './colorBoxSelectors';

const propTypes = {
  bgColor: string,
  elevation: number,
};

const StyledColorBox = styled.div`
  ${({ theme, bgColor, elevation }) => css`
    ${bgColor && `background-color: ${getBoxBgColor(theme, bgColor)};`}
    ${elevation && getBoxElevation(theme, elevation)}}
  `}
`;

StyledColorBox.propTypes = propTypes;

export default StyledColorBox;
