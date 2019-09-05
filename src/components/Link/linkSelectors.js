import { getLink, getMode } from '../../theme/themeSelectors';

export const getLinkTypeStyle = (theme, linktype, state) => {
  const mode = getMode(theme);
  const typeStyle = getLink(theme).linkTypes[mode][linktype];
  if (!typeStyle) {
    throw new Error(`There is no ${linktype} link type in the <Link /> theme`);
  }
  if (!typeStyle[state]) {
    throw new Error(
      `There is no ${state} state for ${linktype} link type in <Link /> theme`
    );
  }
  return typeStyle[state];
};

export const getLinkCommonStyle = theme => getLink(theme).common;
