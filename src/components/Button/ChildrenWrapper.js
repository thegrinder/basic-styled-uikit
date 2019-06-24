import { bool } from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  submitting: bool.isRequired,
};

const ChildrenWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ submitting }) => (submitting ? '0' : '1')};
`;

ChildrenWrapper.propTypes = propTypes;

export default ChildrenWrapper;
