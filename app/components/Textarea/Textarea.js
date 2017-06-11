import styled from 'styled-components';
import { bool } from 'prop-types';
import { getInputTypeStyle } from 'helpers/form-styles';

const Textarea = styled.textarea`
  max-width: 100%;
  width: 100%;
  border: 0 none;
  padding: 0 10px;
  transition: .2s ease-in-out;
  transition-property: color,background-color,border;
  padding-top: 4px;
  padding-bottom: 4px;
  vertical-align: top;
  overflow: auto;
  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  border-width: 1px;
  border-style: solid;
  background: #fff;
  ${getInputTypeStyle('normal')}
  &:focus {
    outline: none;
    background-color: #fff;
    ${getInputTypeStyle('focus')}
  }
`;

Textarea.propTypes = {
  isValid: bool,
};

Textarea.defaultProps = {
  isValid: true,
};

export default Textarea;
