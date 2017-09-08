import styled from 'styled-components';
import { oneOf } from 'prop-types';
import sharedStyles from '../../helpers/sharedStyles';
import { linkNormalStyles, linkHoverStyles } from './linkHelpers';

const Link = styled.a`
  ${sharedStyles}
  cursor: pointer;
  touch-action: manipulation;
  text-decoration: none;
  ${linkNormalStyles}
  &:hover {
    ${linkHoverStyles}
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
