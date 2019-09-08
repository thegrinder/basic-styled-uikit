import React from 'react';
import { render } from '@testing-library/react';

import PlainButton from '../PlainButton';

const text = 'button';

const renderComponent = () => render(<PlainButton>{text}</PlainButton>);

describe('<PlainButton />', () => {
  it('should render correctly', () => {
    const { getByText } = renderComponent();
    expect(getByText(text)).toBeDefined();
  });

  it('should render <button> tag', () => {
    const { getByText } = renderComponent();
    expect(getByText(text).tagName).toEqual('BUTTON');
  });
});
