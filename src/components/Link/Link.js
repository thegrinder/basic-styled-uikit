import styled from 'styled-components';
import { string } from 'prop-types';
import { getColor } from '../../theme/colors';
import { textSizingStyle } from '../Text/textHelpers';

const propTypes = {
  sizing: string,
  color: string,
  hoverColor: string,
};

const defaultProps = {
  sizing: 't2',
  color: 'gray600',
  hovercolor: 'gray700',
};

const Link = styled.a`
  cursor: pointer;
  touch-action: manipulation;
  text-decoration: none;
  font-family: inherit;
  ${textSizingStyle}
  margin-bottom: 0;
  color: ${({ theme, color }) => getColor(theme, color)};
  &:hover {
    color: ${({ theme, hovercolor }) => getColor(theme, hovercolor)};
    outline: none;
    text-decoration: underline;
  }
`;

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
