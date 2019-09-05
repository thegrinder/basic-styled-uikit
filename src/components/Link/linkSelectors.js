import { getLink, getMode } from '../../theme/themeSelectors';

export const getLinkTypeStyle = (theme, linktype, state) => {
  const mode = getMode(theme);
  const typeStyle = getLink(theme).linkTypes[linktype][mode];
  if (!typeStyle) {
    throw new Error(`There is no ${linktype} link type in the <Link /> theme`);
  }
  return typeStyle[state];
};

export const getLinkCommonStyle = theme => getLink(theme).common;
