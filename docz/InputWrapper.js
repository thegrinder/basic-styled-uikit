import styled from 'styled-components';
import { number } from 'prop-types';

const propTypes = {
  width: number,
};

const defaultProps = {
  width: 300,
};

const InputWrapper = styled.div`
  width: ${({ width }) => width}px;
`;

InputWrapper.propTypes = propTypes;
InputWrapper.defaultProps = defaultProps;

export default InputWrapper;
