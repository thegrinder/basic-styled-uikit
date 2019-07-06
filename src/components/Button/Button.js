import React from 'react';
import {
  node,
  bool,
  string,
  oneOfType,
  oneOf,
  func,
} from 'prop-types';
import ContentWrapper from './ContentWrapper';
import StyledButton from './StyledButton';
import SpinnerWrapper from './SpinnerWrapper';

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
};

const defaultProps = {
  sizing: 'm',
  btnType: 'default',
  submitting: false,
  as: 'button',
};

const Button = ({
  btnType: btntype,
  sizing,
  submitting,
  renderSpinner,
  children,
  as,
  ...rest
}) => (
    <StyledButton
      as={as}
      sizing={sizing}
      btntype={btntype}
      {...rest}
    >
      {submitting && (
        <SpinnerWrapper>
          {renderSpinner}
        </SpinnerWrapper>
      )}
      <ContentWrapper submitting={submitting}>
        {children}
      </ContentWrapper>
    </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
