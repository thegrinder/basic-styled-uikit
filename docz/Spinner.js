import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  animation: ${loading} 0.75s 0s infinite linear;
  vertical-align: middle;
  display: inline-block;
`;

export default Spinner;
