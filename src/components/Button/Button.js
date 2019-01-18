import React from 'react';
import { node, bool, string } from 'prop-types';
import ChildrenWrapper from './ChildrenWrapper';
import StyledButton from './StyledButton';
import SpinnerWrapper from './SpinnerWrapper';

const propTypes = {
  /** submitting flag that shows a component passed to renderSpinner prop */
  submitting: bool,
  /** one of: default, primary, danger */
  btnType: string,
  /** one of: small, default, large */
  btnSize: string,
  /** component showed on the left (e.g. icon) */
  left: node,
  /** component showed on the right (e.g. icon) */
  right: node,
  /** spinner component shown when submitting flag is true */
  renderSpinner: node,
};

const defaultProps = {
  btnSize: 'default',
  btnType: 'default',
  submitting: false,
};

const Button = ({
  left,
  right,
  btnType,
  btnSize,
  submitting,
  renderSpinner,
  children,
  ...rest
}) => (
  <StyledButton
    left={left}
    right={right}
    btnSize={btnSize}
    btnType={btnType}
    {...rest}
  >
    {submitting && (
      <SpinnerWrapper>
        {renderSpinner}
      </SpinnerWrapper>
    )}
    <ChildrenWrapper submitting={submitting}>
      {left && left}
      {children}
      {right && right}
    </ChildrenWrapper>
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
