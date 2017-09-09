import { getStyle } from '../../helpers/utils';

const getAlertStatus = ({ theme, status }) => theme.uiKit.alert[status];
export const alertStatusStyle = getStyle(getAlertStatus);
