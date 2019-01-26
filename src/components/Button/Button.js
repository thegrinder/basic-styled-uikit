import React from 'react';
import {
  node,
  bool,
  string,
  oneOfType,
  func,
} from 'prop-types';
import ChildrenWrapper from './ChildrenWrapper';
import StyledButton from './StyledButton';
import SpinnerWrapper from './SpinnerWrapper';

const propTypes = {
  /** submitting flag that shows a component passed to renderSpinner prop */
  submitting: bool,
  /** one of: default, primary, danger */
  btnType: string,
  /** one of: s, m, l */
  btnSize: string,
  /** component showed on the left (e.g. icon) */
  left: node,
  /** component showed on the right (e.g. icon) */
  right: node,
  /** spinner component shown when submitting flag is true */
  renderSpinner: node,
  /** determines the html tag; can be button, a, or a custom router link component */
  as: oneOfType([string, func]),
};

const defaultProps = {
  btnSize: 'm',
  btnType: 'default',
  submitting: false,
  as: 'button',
};

const Button = ({
  left,
  right,
  btnType,
  btnSize,
  submitting,
  renderSpinner,
  children,
  as,
  ...rest
}) => (
    <StyledButton
      as={as}
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
