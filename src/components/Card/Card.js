import styled from 'styled-components';
import { rem } from '../../helpers/utils';
import { getColor } from '../../theme/colors';

const Card = styled.div`
  background: #fff;
  border-radius: ${rem(6)};
  box-shadow: 0 1px 3px 0 ${({ theme }) => getColor(theme, 'gray300')},
    0 0 0 1px ${({ theme }) => getColor(theme, 'gray300')};
`;

export default Card;
