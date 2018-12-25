import styled from 'styled-components';
import { string } from 'prop-types';
import { colorBoxBgStyle, colorBoxBorderStyle } from './colorBoxHelpers';

const propTypes = {
  bgColor: string,
  borderColor: string,
};

const defaultProps = {
  bgColor: 'transparent',
  borderColor: 'transparent',
};

const ColorBox = styled.div`
  ${colorBoxBgStyle}
  ${colorBoxBorderStyle}
`;

ColorBox.propTypes = propTypes;
ColorBox.defaultProps = defaultProps;

export default ColorBox;
