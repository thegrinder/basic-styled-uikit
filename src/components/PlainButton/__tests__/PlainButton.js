import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import PlainButton from '../PlainButton';

describe('<PlainButton />', () => {
  it('should render correctly', () => {
    const { container } = render(<PlainButton />);
    expect(container.firstChild).toBeDefined();
  });

  it('should render button tag', () => {
    const { container } = render(<PlainButton />);
    expect(container.firstChild.tagName).toEqual('BUTTON');
  });

  it('should render text correctly', () => {
    const text = 'text';
    const { container } = render(<PlainButton>{text}</PlainButton>);
    expect(container.firstChild).toHaveTextContent(text);
    expect(container.firstChild).toMatchSnapshot();
  });
});
