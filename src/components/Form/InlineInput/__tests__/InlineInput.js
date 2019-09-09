import React from 'react';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../../Mode';
import { TypographyProvider } from '../../../Typography';
import FormProvider from '../../FormProvider';
import InlineInput from '../InlineInput';

const testId = 'inline-input';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <TypographyProvider>
        <FormProvider>
          <InlineInput data-testid={testId} {...props} />
        </FormProvider>
      </TypographyProvider>
    </ModeProvider>
  );

describe('<InlineInput />', () => {
  it('should render correctly with default props', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const spinner = <span data-testid="spinner" />;
    const { queryByTestId } = renderComponent({
      invalid: false,
      submitting: true,
      renderSpinner: spinner,
    });
    expect(queryByTestId('spinner')).toBeTruthy();
    expect(queryByTestId(testId)).toBeTruthy();
  });
});
