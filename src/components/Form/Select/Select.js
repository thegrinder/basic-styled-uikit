import styled from 'styled-components';
import { bool } from 'prop-types';
import selectIcon from './select_icon.svg';
import selectDisabledIcon from './select_disabled_icon.svg';
import { commonInputStyles } from '../commonFormStyles';
import { rem } from '../../../helpers/utils';

const Select = styled.select`
  ${commonInputStyles}
  text-transform: none;
  padding: 0 ${rem(10)};
  vertical-align: middle;
  display: inline-block;
  height: ${rem(40)};
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
