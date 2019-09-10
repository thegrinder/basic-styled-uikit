import React from 'react';
import { render } from '../../../../test-utils';
import PlainButton from '../PlainButton';

const text = 'button';

const renderComponent = () => render(<PlainButton>{text}</PlainButton>);

describe('<PlainButton />', () => {
  it('should render correctly', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(text)).toBeTruthy();
  });

  it('should render <button> tag', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(text).tagName).toEqual('BUTTON');
  });
});
