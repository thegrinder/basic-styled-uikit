/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { node } from 'prop-types';
import { ModeProvider } from '../components/Mode';
import { TypographyProvider } from '../components/Typography';
import { ButtonProvider } from '../components/Button';
import { ColorBoxProvider } from '../components/ColorBox';
import { LinkProvider } from '../components/Link';
import { FormProvider } from '../components/Form';

const propTypes = {
  children: node.isRequired,
};

const Wrapper = ({ children }) => (
  <ModeProvider>
    <ColorBoxProvider>
      <TypographyProvider>
        <ButtonProvider>
          <LinkProvider>
            <FormProvider>
              <>{children}</>
            </FormProvider>
          </LinkProvider>
        </ButtonProvider>
      </TypographyProvider>
    </ColorBoxProvider>
  </ModeProvider>
);

Wrapper.propTypes = propTypes;

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
