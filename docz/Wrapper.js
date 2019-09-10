import React from 'react';
import { node } from 'prop-types';
import { ModeProvider } from '../src/components/Mode';
import { TypographyProvider } from '../src/components/Typography';
import { ButtonProvider } from '../src/components/Button';
import { ColorBoxProvider } from '../src/components/ColorBox';
import { LinkProvider } from '../src/components/Link';
import { FormProvider } from '../src/components/Form';
import GlobalStyle from './GlobalStyle';

const propTypes = {
  children: node.isRequired,
};

const Wrapper = ({ children }) => (
  <ModeProvider>
    <GlobalStyle />
    <ColorBoxProvider>
      <TypographyProvider>
        <ButtonProvider>
          <LinkProvider>
            <FormProvider>
              <div>{children}</div>
            </FormProvider>
          </LinkProvider>
        </ButtonProvider>
      </TypographyProvider>
    </ColorBoxProvider>
  </ModeProvider>
);

Wrapper.propTypes = propTypes;

export default Wrapper;
