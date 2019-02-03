import styled from 'styled-components';
import { number } from 'prop-types';

import { getToggleStyle } from '../formTheme';
import { rem } from '../../../theme/typography';

const propTypes = {
  h: number.isRequired,
};

const ToggleCheckbox = styled.input(({ theme, h }) => ({
  display: 'none',
  '& + span': {
    ...getToggleStyle(theme, 'normal'),
  },
  '&:checked + span': {
    ...getToggleStyle(theme, 'checked'),
  },
  '& + span:before': {
    left: rem(theme, 4),
  },
  '&:checked + span:before': {
    left: `calc(100% - ${rem(theme, (h - 4))})`,
  },
}));

ToggleCheckbox.propTypes = propTypes;

export default ToggleCheckbox;
