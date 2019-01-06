import { string } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { getColor } from '../../theme/colors';
import { rem } from '../../helpers/utils';

const increase = keyframes`
  from { left: -15%; width: 5%; }
  to { left: 130%; width: 100%; }
`;

const decrease = keyframes`
  from { left: -80%; width: 80%; }
  to { left: 110%; width: 10%; }
`;

const propTypes = {
  color: string.isRequired,
  bgColor: string.isRequired,
};

const InfiniteProgressBar = styled.div`
  position: relative;
  height: ${rem(5)};
  overflow-x: hidden;
  background: ${({ theme, bgColor }) => getColor(theme, bgColor)};
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ${({ theme, color }) => getColor(theme, color)};
    height: ${rem(5)};
    width: 10%;
    left: -15%;
  }
  &:after {
    animation: ${increase} 2s infinite;
  }
  &:before {
    animation: ${decrease} 2s 0.5s infinite;
  }
`;

InfiniteProgressBar.propTypes = propTypes;

export default InfiniteProgressBar;
