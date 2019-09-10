import React from 'react';
import { render } from '../../../../test-utils';
import Input from '../Input';

const testId = 'input';

const renderComponent = (props = {}) =>
  render(<Input data-testid={testId} {...props} />);

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
