import { bool } from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  submitting: bool.isRequired,
};

const ContentWrapper = styled.span`
  display: flex;
  align-items: center;
  opacity: ${({ submitting }) => (submitting ? '0' : '1')};
`;

ContentWrapper.propTypes = propTypes;

export default ContentWrapper;
