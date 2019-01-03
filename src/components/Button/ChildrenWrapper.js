import { bool } from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  submitting: bool.isRequired,
};

const ChildrenWrapper = styled.span`
  opacity: ${({ submitting }) => (submitting ? '0' : '1')};
`;

ChildrenWrapper.propTypes = propTypes;

export default ChildrenWrapper;
