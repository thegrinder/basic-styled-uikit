import React from 'react';
import { render } from '../../../test-utils';
import Button from '../Button';

const children = <span>children</span>;

const renderComponent = (props = {}) =>
  render(<Button {...props}>{children}</Button>);

describe('<Button />', () => {
  it('should render correctly with default props and children', () => {
    const { queryByText } = renderComponent();
    expect(queryByText('children')).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const spinner = <span data-testid="spinner" />;
    const { queryByText, queryByTestId } = renderComponent({
      btnType: 'danger',
      sizing: 's',
      submitting: true,
      renderSpinner: spinner,
    });
    expect(queryByTestId('spinner')).toBeTruthy();
    expect(queryByText('children')).toBeTruthy();
  });

  it('should render <a> tag by default', () => {
    const {
      container: { firstChild },
    } = renderComponent({ as: 'a' });
    expect(firstChild.tagName).toEqual('A');
  });

  it('should render render <button> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('BUTTON');
  });
});
