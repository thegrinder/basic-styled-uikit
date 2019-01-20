import styled from 'styled-components';
import { number } from 'prop-types';

const propTypes = {
  maxWidth: number,
};

const defaultProps = {
  maxWidth: 300,
};

const InputWrapper = styled.div`
  max-width: ${({ width }) => width}px;
`;

InputWrapper.propTypes = propTypes;
InputWrapper.defaultProps = defaultProps;

export default InputWrapper;
