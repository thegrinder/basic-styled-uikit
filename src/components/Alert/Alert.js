import styled from 'styled-components';
import { oneOf } from 'prop-types';
import sharedStyles from '../../helpers/sharedStyles';
import { alertStatusStyle } from './alertHelpers';

const Alert = styled.div`
  ${sharedStyles}
  position: relative;
  padding: 15px 30px 15px 15px;
  margin-bottom: 10px;
  ${alertStatusStyle}
`;

Alert.propTypes = {
  status: oneOf([
    'default',
    'primary',
    'warning',
    'success',
    'danger',
  ]),
};

Alert.defaultProps = {
  status: 'default',
};

export default Alert;
