import { getLink } from '../../theme/themeSelectors';

export const getLinkTypeStyle = (theme, linktype, state) => (
  getLink(theme).linkTypes[linktype][state]
);

export const getLinkCommonStyle = theme => getLink(theme).common;
