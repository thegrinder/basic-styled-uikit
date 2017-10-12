import styled from 'styled-components';
import { string } from 'prop-types';
import { colorBoxBgStyle, colorBoxBorderStyle } from './colorBoxHelpers';

const ColorBox = styled.div`
  ${colorBoxBgStyle}
  ${colorBoxBorderStyle}
`;

ColorBox.propTypes = {
  bgColor: string,
  borderColor: string,
};

ColorBox.defaultProps = {
  bgColor: 'transparent',
  borderColor: 'transparent',
};

export default ColorBox;
