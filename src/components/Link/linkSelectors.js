import { getLink } from '../../theme/themeSelectors';

export const getLinkTypeStyle = (theme, linktype, state) => {
  const typeStyle = getLink(theme).linkTypes[linktype];
  return typeStyle && typeStyle[state] ? typeStyle[state] : {};
};

export const getLinkCommonStyle = (theme) => getLink(theme).common;
