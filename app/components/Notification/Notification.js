import styled from 'styled-components';
import { oneOf } from 'prop-types';
import { getNotificationStatusStyle } from './notificationHelpers';

const Notification = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 15px;
  background: #f8f8f8;
  font-size: 20px;
  line-height: 1.4;
  cursor: pointer;
  ${getNotificationStatusStyle};
`;

Notification.propTypes = {
  status: oneOf([
    'default',
    'primary',
    'warning',
    'success',
    'danger',
  ]).isRequired,
};

Notification.defaultProps = {
  status: 'default',
};

export default Notification;

