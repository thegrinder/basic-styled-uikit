import styled, { keyframes } from 'styled-components';
import { string } from 'prop-types';

const loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const propTypes = {
  color: string,
};

const defaultProps = {
  color: '#fff',
};

const Spinner = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid ${({ color }) => color};
  border-bottom-color: transparent;
  animation: ${loading} 0.75s 0s infinite linear;
  vertical-align: middle;
  display: inline-block;
`;

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
