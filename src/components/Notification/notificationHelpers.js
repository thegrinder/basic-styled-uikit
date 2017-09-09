import { getStyle } from '../../helpers/utils';

const getNotificationStatus = ({ theme, status }) => theme.uiKit.notification[status];
export const getNotificationStatusStyle = getStyle(getNotificationStatus);
