import React from 'react';
import { bool } from 'prop-types';
import Wrapper from './Wrapper';
import SpinnerWrapper from './SpinnerWrapper';
import Spinner from '../../Spinner/Spinner';
import StyledInlineInput from './StyledInlineInput';

const propTypes = {
  submitting: bool,
  disabled: bool,
  invalid: bool,
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
        <Spinner color="#ccc"/>
      </SpinnerWrapper>
    )}
  </Wrapper>
);

InlineInput.propTypes = propTypes;
InlineInput.defaultProps = defaultProps;

export default InlineInput;
