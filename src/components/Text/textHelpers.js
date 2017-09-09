import { getStyle } from '../../helpers/utils';

const getTextSizing = ({ theme, sizing }) => theme.uiKit.text.sizings[sizing];
const getTextColour = ({ theme, colour }) => theme.uiKit.text.colours[colour];

export const textSizingStyle = getStyle(getTextSizing);
export const textColourStyle = getStyle(getTextColour);
