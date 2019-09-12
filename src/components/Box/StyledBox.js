import styled, { css } from 'styled-components';
import { string, number } from 'prop-types';
import { getBoxBgColor, getBoxElevation } from './boxSelectors';

const propTypes = {
  bgColor: string,
  elevation: number,
};

const StyledBox = styled.div`
  ${({ theme, bgColor, elevation }) => css`
    ${bgColor && `background-color: ${getBoxBgColor(theme, bgColor)};`}
    ${elevation && getBoxElevation(theme, elevation)}}
  `}
`;

StyledBox.propTypes = propTypes;

export default StyledBox;
