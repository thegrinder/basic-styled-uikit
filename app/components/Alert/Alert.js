import styled from 'styled-components';
import { oneOf } from 'prop-types';
import { getAlertStatusStyle } from './alertHelpers';

const Alert = styled.div`
  position: relative;
  padding: 15px 30px 15px 15px;
  margin-bottom: 10px;
  ${getAlertStatusStyle}
`;

Alert.propTypes = {
  status: oneOf([
    'default',
    'primary',
    'warning',
    'success',
    'danger',
  ]).isRequired,
};

Alert.defaultProps = {
  status: 'default',
};

export default Alert;
