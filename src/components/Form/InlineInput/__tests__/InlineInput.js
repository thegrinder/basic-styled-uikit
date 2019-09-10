import React from 'react';
import { render } from '../../../../test-utils';
import InlineInput from '../InlineInput';

const testId = 'inline-input';

const renderComponent = (props = {}) =>
  render(<InlineInput data-testid={testId} {...props} />);

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
