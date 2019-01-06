import styled, { keyframes } from 'styled-components';
import { number, string } from 'prop-types';
import { rem } from '../../helpers/utils';
import { getColor } from '../../theme/colors';

const propTypes = {
  sizing: number,
  color: string.isRequired,
};

const defaultProps = {
  sizing: 20,
};

const loading = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  width: ${props => rem(props.sizing)};
  height: ${props => rem(props.sizing)};
  border-radius: 100%;
  border: 2px solid ${({ theme, color }) => getColor(theme, color)};
  border-bottom-color: transparent;
  animation: ${loading} 0.75s 0s infinite linear;
  vertical-align: middle;
  display: inline-block;
`;

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
