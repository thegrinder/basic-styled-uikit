import styled from 'styled-components';
import { string } from 'prop-types';
import { textSizingStyle } from '../Text/textHelpers';
import { linkNormalStyle, linkHoverStyle } from './linkHelpers';

const propTypes = {
  sizing: string,
  linktype: string,
};

const defaultProps = {
  sizing: 'm',
  linktype: 'default',
};

const Link = styled.a`
  cursor: pointer;
  touch-action: manipulation;
  text-decoration: none;
  font-family: inherit;
  ${textSizingStyle}
  margin-bottom: 0;
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
