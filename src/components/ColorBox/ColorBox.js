import styled from 'styled-components';
import { string } from 'prop-types';
import { colorBoxBgStyle, colorBoxBorderStyle } from './colorBoxHelpers';

const propTypes = {
  bgColor: string,
  borderColor: string,
};

const ColorBox = styled.div`
  ${colorBoxBgStyle}
  ${colorBoxBorderStyle}
`;

ColorBox.propTypes = propTypes;

export default ColorBox;
