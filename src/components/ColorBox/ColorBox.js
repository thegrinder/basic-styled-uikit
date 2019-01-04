import styled from 'styled-components';
import { string } from 'prop-types';
import { getColor } from './colorBoxHelpers';

const propTypes = {
  bgColor: string,
  borderColor: string,
};

const defaultProps = {
  bgColor: 'transparent',
  borderColor: 'transparent',
};

const ColorBox = styled.div`
  background-color: ${({ theme, bgColor }) => getColor(theme, bgColor)};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, borderColor }) => getColor(theme, borderColor)};
`;

ColorBox.propTypes = propTypes;
ColorBox.defaultProps = defaultProps;

export default ColorBox;
