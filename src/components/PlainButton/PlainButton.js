import styled from 'styled-components';
import { string } from 'prop-types';
import { getColor } from '../../theme/colors';

const propTypes = {
  color: string.isRequired,
  hoverColor: string.isRequired,
};

const PlainButton = styled.button`
  touch-action: manipulation;
  margin: 0;
  border: none;
  overflow: visible;
  text-transform: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  position: relative;
  fill: currentcolor;
  line-height: 0;
  outline: none;
  transition: .1s ease-in-out;
  transition-property: color;
  color: ${({ theme, color }) => getColor(theme, color)};
  &:focus,
  &:hover {
    opacity: 1;
    color: ${({ theme, hoverColor }) => getColor(theme, hoverColor)};
  }
`;

PlainButton.propTypes = propTypes;

export default PlainButton;
