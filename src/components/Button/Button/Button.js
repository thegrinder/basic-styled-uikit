import React from 'react';
import { node, bool, string, oneOfType, oneOf, func } from 'prop-types';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const ContentWrapper = styled.span`
  display: flex;
  align-items: center;
  opacity: ${({ submitting }) => (submitting ? '0' : '1')};
`;

ContentWrapper.propTypes = {
  submitting: bool.isRequired,
};

const SpinnerWrapper = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const propTypes = {
  /** submitting flag that shows a component passed to renderSpinner prop */
  submitting: bool,
  /** one of: default, primary, danger */
  btnType: string,
  /** one of: s, m, l */
  sizing: string,
  /** spinner component shown when submitting flag is true */
  renderSpinner: node,
  /** rendered html tag or custom router link component */
  as: oneOfType([oneOf(['a', 'button']), func]),
  children: node,
};

const Button = ({
  btnType: btntype = 'default',
  sizing = 'm',
  submitting = false,
  renderSpinner,
  children,
  as = 'button',
  ...rest
}) => (
  <StyledButton as={as} sizing={sizing} btntype={btntype} {...rest}>
    {submitting && <SpinnerWrapper>{renderSpinner}</SpinnerWrapper>}
    <ContentWrapper submitting={submitting}>{children}</ContentWrapper>
  </StyledButton>
);

Button.propTypes = propTypes;

export default Button;
