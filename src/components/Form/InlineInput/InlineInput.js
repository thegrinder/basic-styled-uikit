import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import StyledInlineInput from './StyledInlineInput';
import Spinner from '../../Spinner/Spinner';
import { rem } from '../../../helpers/utils';

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

function InlineInput({ submitting, disabled, ...propsRest }) {
  return (
    <Wrapper>
      <StyledInlineInput disabled={submitting || disabled} {...propsRest} />
      {submitting && <SpinnerWrapper><Spinner color="#ccc"/></SpinnerWrapper>}
    </Wrapper>
  );
}

InlineInput.propTypes = {
  submitting: bool.isRequired,
  disabled: bool.isRequired,
};

export default InlineInput;
