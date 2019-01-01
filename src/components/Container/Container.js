import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rem } from '../../helpers/utils';

const propTypes = {
  maxWidth: PropTypes.number,
};

const defaultProps = {
  maxWidth: 960,
};

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: ${rem(16)};
  padding-left: ${rem(16)};
  max-width: ${props => props.maxWidth}px;
`;

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
