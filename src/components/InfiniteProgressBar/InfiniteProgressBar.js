import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import colors from '../../theme/colors';
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
  colour: PropTypes.string,
  bgColour: PropTypes.string,
};

const defaultProps = {
  colour: colors.primary500,
  bgColor: colors.primary100,
};

const InfiniteProgressBar = styled.div`
  position: relative;
  height: ${rem(5)};
  overflow-x: hidden;
  background: ${props => props.bgColor};
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ${props => props.colour};
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
InfiniteProgressBar.defaultProps = defaultProps;

export default InfiniteProgressBar;
