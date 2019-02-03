import styled from 'styled-components';
import { rem } from '../../../theme/typography';

const SpinnerWrapper = styled.div`
  position: absolute;
  right: ${({ theme }) => rem(theme, 8)};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export default SpinnerWrapper;
