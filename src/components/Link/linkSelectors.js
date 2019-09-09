import { createSelector } from '../../helpers';

export const getLink = createSelector('link');

export const getLinkTypeStyle = (theme, linktype, state) => {
  const typeStyle = getLink(theme).linkTypes[linktype];
  if (!typeStyle) {
    throw new Error(`There is no ${linktype} link type in the <Link /> theme`);
  }
  return typeStyle[state];
};

export const getLinkCommonStyle = theme => getLink(theme).common;
