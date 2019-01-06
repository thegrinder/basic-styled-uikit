import React from 'react';
import { bool, node } from 'prop-types';
import Wrapper from './Wrapper';
import SpinnerWrapper from './SpinnerWrapper';
import StyledInlineInput from './StyledInlineInput';

const propTypes = {
  submitting: bool,
  disabled: bool,
  invalid: bool,
  renderSpinner: node,
};

const defaultProps = {
  submitting: false,
  disabled: false,
  invalid: false,
  renderSpinner: 'gray500',
};

const InlineInput = ({
  submitting,
  disabled,
  invalid,
  renderSpinner,
  ...rest
}) => (
  <Wrapper>
    <StyledInlineInput
      submitting={submitting}
      disabled={submitting || disabled}
      invalid={invalid}
      {...rest}
    />
    {submitting && (
      <SpinnerWrapper>
        {renderSpinner}
      </SpinnerWrapper>
    )}
  </Wrapper>
);

InlineInput.propTypes = propTypes;
InlineInput.defaultProps = defaultProps;

export default InlineInput;
