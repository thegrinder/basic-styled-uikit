import { getStyle } from '../../helpers/utils';

const getHeadingSizing = ({ theme, sizing }) => theme.uiKit.heading.sizings[sizing];
export const headingSizingStyle = getStyle(getHeadingSizing);

const getHeadingColour = ({ theme, colour }) => theme.uiKit.heading.colours[colour];
export const headingColourStyle = getStyle(getHeadingColour);
