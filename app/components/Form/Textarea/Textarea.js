import styled from 'styled-components';
import { bool } from 'prop-types';
import commonFormStyles from '../commonFormStyles';
import { inputNormalStyles, inputActiveStyles } from '../formHelpers';

const Textarea = styled.textarea`
  ${commonFormStyles}
  max-width: 100%;
  width: 100%;
  border: 0 none;
  padding: 0 10px;
  transition: .2s ease-in-out;
  transition-property: color,background-color,border;
  padding-top: 4px;
  padding-bottom: 4px;
  vertical-align: top;
  border-width: 1px;
  border-style: solid;
  background: #fff;
  ${inputNormalStyles}
  &:focus {
    background-color: #fff;
    ${inputActiveStyles}
  }
`;

Textarea.propTypes = {
  isValid: bool,
};

Textarea.defaultProps = {
  isValid: true,
};

export default Textarea;
