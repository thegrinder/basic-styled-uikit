import React from 'react';
import { render } from '../../../../test-utils';
import Textarea from '../Textarea';

const testId = 'textarea';

const renderComponent = props =>
  render(<Textarea data-testid={testId} {...props} />);

describe('<Textarea />', () => {
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

  it('should render <textarea> tag', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId).tagName).toEqual('TEXTAREA');
  });
});
