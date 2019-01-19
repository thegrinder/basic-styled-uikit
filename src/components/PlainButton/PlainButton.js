import styled from 'styled-components';

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
  line-height: 1;
  outline: none;
  transition: .1s ease-in-out;
  transition-property: color;
`;

export default PlainButton;
