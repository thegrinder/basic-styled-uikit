import styled from 'styled-components';
import { string } from 'prop-types';
import sharedStyles from '../../helpers/sharedStyles';
import { colorBoxBgStyle, colorBoxBorderStyle } from './colorBoxHelpers';

const StyledColorBox = styled.div`
  ${sharedStyles}
  ${colorBoxBgStyle}
  ${colorBoxBorderStyle}
`;

StyledColorBox.propTypes = {
  bgColor: string.isRequired,
  borderColor: string.isRequired,
};

export default StyledColorBox;
