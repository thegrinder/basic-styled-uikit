import React from 'react';
import { render } from '../../../../test-utils';
import Checkbox from '../Checkbox';

const testId = 'checkbox';

const renderComponent = (props = {}) =>
  render(<Checkbox data-testid={testId} {...props} />);

describe('<Checkbox />', () => {
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

  it('should render <input> tag with type checkbox', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId).tagName).toEqual('INPUT');
    expect(queryByTestId(testId).type).toEqual('checkbox');
  });
});
