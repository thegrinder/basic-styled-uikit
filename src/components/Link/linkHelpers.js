import { css } from 'styled-components';
import { getStyle } from '../../helpers/utils';

const getLinkType = ({ theme, linkType }, state) => theme.uiKit.link.linkTypes[linkType][state];

const getLinkTypeStyle = state => css`
  ${getStyle(getLinkType, state)}
`;

export const linkNormalStyles = getLinkTypeStyle('normal');
export const linkHoverStyles = getLinkTypeStyle('hover');
