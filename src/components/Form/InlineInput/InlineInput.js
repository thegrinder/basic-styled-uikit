import React from 'react';
import { bool, node } from 'prop-types';
import styled from 'styled-components';
import { rem } from '../../Typography';
import StyledInlineInput from './StyledInlineInput';

const Wrapper = styled.div`
  position: relative;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  right: ${rem(8)};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

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
