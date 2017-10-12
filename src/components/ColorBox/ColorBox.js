import styled from 'styled-components';
import { string } from 'prop-types';
import sharedStyles from '../../helpers/sharedStyles';
import { colorBoxBgStyle, colorBoxBorderStyle } from './colorBoxHelpers';

const ColorBox = styled.div`
  ${sharedStyles}
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
