import styled from 'styled-components';
import { string } from 'prop-types';

const CloseButton = styled.button`
  touch-action: manipulation;
  margin: 0;
  border: none;
  overflow: visible;
  text-transform: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  fill: currentcolor;
  line-height: 0;
  outline: none;
  transition: .1s ease-in-out;
  transition-property: color;
  color: ${props => props.btnColor};
  &:focus,
  &:hover {
    color: ${props => props.btnHoverColor};
  }
`;

CloseButton.propTypes = {
  btnColor: string.isRequired,
  btnHoverColor: string.isRequired,
};

export default CloseButton;
