import { css } from 'styled-components';

const getLinkTypes = props => props.theme.uiKit.link.linkTypes;
const getLinkType = props => getLinkTypes(props)[props.linkType];

export const getLinkTypeStyle = css`
  color: ${props => getLinkType(props).color};
  &:hover {
    color: ${props => getLinkType(props).hoverColor};
  }
`;
