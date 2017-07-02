import { css } from 'styled-components';
import { getStyle } from '../../helpers/utils';

const getAlertStatus = ({ theme, status }) => theme.uiKit.alert[status];

export const getAlertStatusStyle = css`
  ${getStyle(getAlertStatus)}
`;
