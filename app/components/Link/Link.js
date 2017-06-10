import styled from 'styled-components';
import { getLinkTypeStyle } from 'helpers/link-styles';

const Link = styled.a`
  cursor: pointer;
  touch-action: manipulation;
  text-decoration: none;
  &:hover {
    outline: none;
    text-decoration: underline;
  }
  ${getLinkTypeStyle}
`;

Link.defaultProps = {
  linkType: 'muted',
};

export default Link;
