import React from 'react';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../../Mode';
import { TypographyProvider } from '../../../Typography';
import FormProvider from '../../FormProvider';
import Input from '../Input';

const testId = 'input';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <TypographyProvider>
        <FormProvider>
          <Input data-testid={testId} {...props} />
        </FormProvider>
      </TypographyProvider>
    </ModeProvider>
  );

describe('<Input />', () => {
  it('should render correctly with default props', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { queryByTestId } = renderComponent({
      invalid: true,
    });
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('should render <input> tag', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId).tagName).toEqual('INPUT');
  });
});
