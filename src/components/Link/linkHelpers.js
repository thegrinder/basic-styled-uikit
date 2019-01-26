import { getStyle } from '../../helpers/utils';

const getLinkType = ({ theme, linktype }, state) => (
  theme.uiKit.link.linkTypes[linktype][state]
);
const getLinkTypeStyle = state => getStyle(getLinkType, state);

export const linkNormalStyle = getLinkTypeStyle('normal');
export const linkHoverStyle = getLinkTypeStyle('hover');

const getLinkCommonStyle = ({ theme }) => theme.uiKit.link.common;
export const linkCommonStyle = getStyle(getLinkCommonStyle);
