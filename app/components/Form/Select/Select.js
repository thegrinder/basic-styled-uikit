import styled from 'styled-components';
import { bool } from 'prop-types';
import selectIcon from './select_icon.svg';
import selectDisabledIcon from './select_disabled_icon.svg';
import { commonInputStyles } from '../commonFormStyles';

const Select = styled.select`
  ${commonInputStyles}
  text-transform: none;
  padding: 0 10px;
  vertical-align: middle;
  display: inline-block;
  height: 40px;
  background-image: url(${selectIcon});
  background-repeat: no-repeat;
  background-position: 100% 50%;
  &:disabled {
    background-image: url(${selectDisabledIcon});
  }
`;

Select.propTypes = {
  isValid: bool,
};

Select.defaultProps = {
  isValid: true,
};


export default Select;
