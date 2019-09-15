import React from 'react';
import { node } from 'prop-types';
import { ModeProvider } from '../src/components/Mode';
import { TypographyProvider } from '../src/components/Typography';
import { ButtonProvider } from '../src/components/Button';
import { BoxProvider } from '../src/components/Box';
import { LinkProvider } from '../src/components/Link';
import { FormProvider } from '../src/components/Form';
import GlobalStyle from './GlobalStyle';

const propTypes = {
  children: node.isRequired,
};

const Wrapper = ({ children }) => (
  <ModeProvider>
    <BoxProvider>
      <TypographyProvider>
        <ButtonProvider>
          <LinkProvider>
            <FormProvider>
              <>
                <GlobalStyle />
                {children}
              </>
            </FormProvider>
          </LinkProvider>
        </ButtonProvider>
      </TypographyProvider>
    </BoxProvider>
  </ModeProvider>
);

Wrapper.propTypes = propTypes;

export default Wrapper;
