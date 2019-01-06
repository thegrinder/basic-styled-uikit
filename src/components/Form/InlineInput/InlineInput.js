import React from 'react';
import { bool, string } from 'prop-types';
import Wrapper from './Wrapper';
import SpinnerWrapper from './SpinnerWrapper';
import Spinner from '../../Spinner/Spinner';
import StyledInlineInput from './StyledInlineInput';

const propTypes = {
  submitting: bool,
  disabled: bool,
  invalid: bool,
  spinnerColor: string,
};

const defaultProps = {
  submitting: false,
  disabled: false,
  invalid: false,
  spinnerColor: 'gray500',
};

const InlineInput = ({
  submitting,
  disabled,
  invalid,
  spinnerColor,
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
        <Spinner color={spinnerColor}/>
      </SpinnerWrapper>
    )}
  </Wrapper>
);

InlineInput.propTypes = propTypes;
InlineInput.defaultProps = defaultProps;

export default InlineInput;
