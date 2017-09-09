import { getStyle } from '../../helpers/utils';

const getLinkType = ({ theme, linkType }, state) => theme.uiKit.link.linkTypes[linkType][state];
const getLinkTypeStyle = state => getStyle(getLinkType, state);

export const linkNormalStyle = getLinkTypeStyle('normal');
export const linkHoverStyle = getLinkTypeStyle('hover');
