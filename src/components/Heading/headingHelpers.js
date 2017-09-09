import { getStyle } from '../../helpers/utils';

const getHeadingSizing = ({ theme, sizing }) => theme.uiKit.heading.sizings[sizing];
const headingSizingStyles = getStyle(getHeadingSizing);

export default headingSizingStyles;
