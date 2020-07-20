import React from 'react';
import { bool, node } from 'prop-types';
import Wrapper from './Wrapper';
import SpinnerWrapper from './SpinnerWrapper';
import StyledInlineInput from './StyledInlineInput';

const propTypes = {
  /** submitting flag that shows a component passed to renderSpinner prop */
  submitting: bool,
  /** disabled flag */
  disabled: bool,
  /** invalid flag */
  invalid: bool,
  /** spinner component shown when submitting flag is true */
  renderSpinner: node,
};

const defaultProps = {
  submitting: false,
  disabled: false,
  invalid: false,
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
    {submitting && <SpinnerWrapper>{renderSpinner}</SpinnerWrapper>}
  </Wrapper>
);

InlineInput.propTypes = propTypes;
InlineInput.defaultProps = defaultProps;

export default InlineInput;
