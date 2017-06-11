import { css } from 'styled-components';
import { getStyle } from './utils';

const getLinkType = ({ theme, linkType }, state) => theme.uiKit.link.linkTypes[linkType][state];

export const getLinkTypeStyle = state => (
  css`
    ${getStyle(getLinkType, state)};
  `
);
