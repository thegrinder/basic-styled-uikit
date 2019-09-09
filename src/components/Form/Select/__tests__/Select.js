import React from 'react';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../../Mode';
import { TypographyProvider } from '../../../Typography';
import FormProvider from '../../FormProvider';
import Select from '../Select';

const testId = 'select';
const option = <option>option</option>;

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <TypographyProvider>
        <FormProvider>
          <Select data-testid={testId} {...props}>
            {option}
          </Select>
        </FormProvider>
      </TypographyProvider>
    </ModeProvider>
  );

describe('<Select />', () => {
  it('should render correctly with default props and its children', () => {
    const { queryByTestId, queryByText } = renderComponent();
    expect(queryByTestId(testId)).toBeTruthy();
    expect(queryByText('option')).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { queryByTestId } = renderComponent({
      invalid: true,
    });
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('should render <select> tag', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId).tagName).toEqual('SELECT');
  });
});
