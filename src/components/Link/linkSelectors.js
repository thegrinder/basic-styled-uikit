export const getLinkTypeStyle = (theme, linktype, state) => (
  theme.uiKit.link.linkTypes[linktype][state]
);

export const getLinkCommonStyle = theme => theme.uiKit.link.common;
