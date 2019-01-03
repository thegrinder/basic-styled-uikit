import React from 'react';
import { node, bool, string } from 'prop-types';
import Spinner from '../Spinner/Spinner';
import ChildrenWrapper from './ChildrenWrapper';
import SpinnerWrapper from './SpinnerWrapper';
import StyledButton from './StyledButton';

const propTypes = {
  submitting: bool,
  btnType: string,
  btnSize: string,
  left: node,
  right: node,
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
        <Spinner />
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
