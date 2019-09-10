import React from 'react';
import { render } from '../../../../test-utils';
import Radio from '../Radio';

const testId = 'radio';

const renderComponent = (props = {}) =>
  render(<Radio data-testid={testId} {...props} />);

describe('<Radio />', () => {
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

  it('should render <input> tag with type radio', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId).tagName).toEqual('INPUT');
    expect(queryByTestId(testId).type).toEqual('radio');
  });
});
