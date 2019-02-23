import styled from 'styled-components';
import { rem } from '../../../theme/typography/typographySelectors';

const SpinnerWrapper = styled.div`
  position: absolute;
  right: ${rem(8)};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export default SpinnerWrapper;
