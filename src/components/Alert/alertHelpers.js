import { css } from 'styled-components';
import { getStyle } from '../../helpers/utils';

const getAlertStatus = ({ theme, status }) => theme.uiKit.alert[status];

const getAlertStatusStyle = css`
  ${getStyle(getAlertStatus)}
`;

export default getAlertStatusStyle;
