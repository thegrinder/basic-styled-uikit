import styled from 'styled-components';
import { oneOf } from 'prop-types';
import sharedStyles from '../../helpers/sharedStyles';
import { linkNormalStyle, linkHoverStyle } from './linkHelpers';

const Link = styled.a`
  ${sharedStyles}
  cursor: pointer;
  touch-action: manipulation;
  text-decoration: none;
  font-family: inherit;
  ${linkNormalStyle}
  &:hover {
    ${linkHoverStyle}
    outline: none;
    text-decoration: underline;
  }
`;

Link.propTypes = {
  linkType: oneOf(['default', 'muted']),
};

Link.defaultProps = {
  linkType: 'muted',
};

export default Link;
