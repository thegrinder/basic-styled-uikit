import styled from 'styled-components';
import { string } from 'prop-types';
import { getColor } from '../../theme/colors';

const propTypes = {
  color: string,
  hoverColor: string,
};

const defaultProps = {
  color: 'gray600',
  hovercolor: 'gray700',
};

const Link = styled.a`
  cursor: pointer;
  touch-action: manipulation;
  text-decoration: none;
  font-family: inherit;
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
