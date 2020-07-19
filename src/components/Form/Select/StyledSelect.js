import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputStyles } from '../commonFormStyles';
import { rem } from '../../../theme/typography';

const propTypes = {
  invalid: bool.isRequired,
};


const StyledSelect = styled.select`
  ${commonInputStyles}
  text-transform: none;
  padding: 0 ${rem(10)};
  vertical-align: middle;
  display: inline-block;
  height: ${rem(40)};
  background-color: #fff;
`;

StyledSelect.propTypes = propTypes;

export default StyledSelect;
