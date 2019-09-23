import React from 'react';
import { render } from '../../../../test-utils';
import FormProvider from '../../FormProvider';
import Toggle from '../Toggle';

const theme = {
  toggle: {
    states: {
      normal: {
        backgroundColor: '#ced4da',
      },
      checked: {
        backgroundColor: '#1e88e5',
      },
    },
  },
};

const testId = 'toggle';

const renderComponent = (props = {}) =>
  render(
    <FormProvider theme={theme}>
      <Toggle data-testid={testId} onChange={() => {}} {...props} />
    </FormProvider>
  );

describe('<Toggle />', () => {
  it('should render with default props', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('should render with custom props', () => {
    const { queryByTestId } = renderComponent({
      h: 100,
      disabled: true,
    });
    expect(queryByTestId(testId)).toBeTruthy();
  });
});
