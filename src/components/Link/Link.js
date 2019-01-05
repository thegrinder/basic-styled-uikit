import styled from 'styled-components';
import { string } from 'prop-types';
import { linkNormalStyle, linkHoverStyle } from './linkHelpers';

const propTypes = {
  linktype: string,
};

const defaultProps = {
  linktype: 'default',
};

const Link = styled.a`
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

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
