import React from 'react';
import { render } from '../../../../test-utils';
import Select from '../Select';

const testId = 'select';
const option = <option>option</option>;

const renderComponent = (props = {}) =>
  render(
    <Select data-testid={testId} {...props}>
      {option}
    </Select>
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
