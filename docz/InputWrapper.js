import styled from 'styled-components';
import { number } from 'prop-types';

const propTypes = {
  maxWidth: number,
};

const InputWrapper = styled.div`
  max-width: ${({ maxWidth = 300 }) => maxWidth}px;
`;

InputWrapper.propTypes = propTypes;

export default InputWrapper;
