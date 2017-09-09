import { getStyle } from '../../helpers/utils';

const getHeadingSizing = ({ theme, sizing }) => theme.uiKit.heading.sizings[sizing];
export const headingSizingStyle = getStyle(getHeadingSizing);
