import { css } from 'styled-components';
import { getStyle } from '../../helpers/utils';

const getNotificationStatus = ({ theme, status }) => theme.uiKit.notification[status];

const getNotificationStatusStyle = css`
  ${getStyle(getNotificationStatus)}
`;

export default getNotificationStatusStyle;
