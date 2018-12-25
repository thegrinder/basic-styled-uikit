import styled, { keyframes } from 'styled-components';
import { number, string } from 'prop-types';
import { rem } from '../../helpers/utils';

const propTypes = {
  size: number,
  color: string,
};

const defaultProps = {
  size: 20,
  color: '#fff',
};

const loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  width: ${props => rem(props.size)};
  height: ${props => rem(props.size)};
  border-radius: 100%;
  border: 2px solid ${props => props.color};
  border-bottom-color: transparent;
  animation: ${loading} 0.75s 0s infinite linear;
  vertical-align: middle;
  display: inline-block;
`;

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
