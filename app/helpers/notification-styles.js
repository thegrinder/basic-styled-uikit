import { css } from 'styled-components';
import { getStyle } from './utils';

const getNotificationStatus = ({ theme, status }) => theme.uiKit.notification[status];

export const getNotificationStatusStyle = css`
  ${getStyle(getNotificationStatus)};
`;
