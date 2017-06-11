import styled from 'styled-components';
import { oneOf } from 'prop-types';
import { getNotificationStatus } from 'helpers/notification-styles';

const Notification = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 15px;
  background: #f8f8f8;
  font-size: 20px;
  line-height: 1.4;
  cursor: pointer;
  color: ${props => getNotificationStatus(props)};
`;

Notification.propTypes = {
  status: oneOf([
    'default',
    'primary',
    'warning',
    'success',
    'danger',
  ]),
};

Notification.defaultProps = {
  status: 'default',
};

export default Notification;

