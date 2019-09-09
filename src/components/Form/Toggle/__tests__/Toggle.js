import React from 'react';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../../Mode';
import { TypographyProvider } from '../../../Typography';
import FormProvider from '../../FormProvider';
import Toggle from '../Toggle';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <FormProvider>
        <TypographyProvider>
          <Toggle onChange={() => {}} {...props} />
        </TypographyProvider>
      </FormProvider>
    </ModeProvider>
  );

describe('<Toggle />', () => {
  it('should render correctly with default props', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const {
      container: { firstChild },
    } = renderComponent({
      h: 100,
      disabled: true,
    });
    expect(firstChild).toBeTruthy();
  });
});
