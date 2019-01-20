import { getStyle } from '../../helpers/utils';

const getLinkType = ({ theme, linktype }, state) => (
  theme.uiKit.link.linktypes[linktype][state]
);
const getLinkTypeStyle = state => getStyle(getLinkType, state);

export const linkNormalStyle = getLinkTypeStyle('normal');
export const linkHoverStyle = getLinkTypeStyle('hover');