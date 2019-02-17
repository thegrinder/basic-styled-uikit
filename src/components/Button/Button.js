import React from 'react';
import {
  node,
  bool,
  string,
  oneOfType,
  oneOf,
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
  sizing: string,
  /** component showed on the left (e.g. icon) */
  left: node,
  /** component showed on the right (e.g. icon) */
  right: node,
  /** spinner component shown when submitting flag is true */
  renderSpinner: node,
  /** rendered html tag or custom router link component */
  as: oneOfType([oneOf(['a', 'button']), func]),
};

const defaultProps = {
  sizing: 'm',
  btnType: 'default',
  submitting: false,
  as: 'button',
};

const Button = ({
  btnType: btntype,
  left,
  right,
  sizing,
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
      sizing={sizing}
      btntype={btntype}
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
