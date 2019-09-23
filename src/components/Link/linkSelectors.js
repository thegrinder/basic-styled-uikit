import { createSelector } from '../../helpers';

export const getLink = createSelector('link');

export const getLinkTypeStyle = (theme, linktype, state) =>
  getLink(theme)?.linkTypes?.[linktype]?.[state];

export const getLinkCommonStyle = theme => getLink(theme)?.common;
