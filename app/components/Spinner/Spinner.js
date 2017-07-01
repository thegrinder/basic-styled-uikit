import styled, { keyframes } from 'styled-components';
import { number, string } from 'prop-types';

const loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  border: 2px solid ${props => props.color};
  border-bottom-color: transparent;
  animation: ${loading} 0.75s 0s infinite linear;
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
`;

Spinner.propTypes = {
  size: number.isRequired,
  color: string.isRequired,
};

Spinner.defaultProps = {
  size: 20,
  color: '#fff',
};

export default Spinner;
