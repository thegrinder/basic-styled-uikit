import styled from 'styled-components';
import { string } from 'prop-types';
import sharedStyles from '../../helpers/sharedStyles';

const CloseButton = styled.button`
  ${sharedStyles}
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
  transition-property: color, opacity;
  opacity: ${props => (
    props.btnColor === 'inherit' && props.btnHoverColor === 'inherit' ? '.4' : '1'
  )};
  color: ${props => props.btnColor};
  &:focus,
  &:hover {
    opacity: 1;
    color: ${props => props.btnHoverColor};
  }
`;

CloseButton.propTypes = {
  btnColor: string.isRequired,
  btnHoverColor: string.isRequired,
};

export default CloseButton;
