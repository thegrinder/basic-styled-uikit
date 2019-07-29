import React from 'react';
import { render, cleanup } from '@testing-library/react';


import PlainButton from '../PlainButton';

describe('<PlainButton />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container: { firstChild } } = render(
      <PlainButton />,
    );
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <button> tag', () => {
    const { container: { firstChild } } = render(
      <PlainButton />,
    );
    expect(firstChild.tagName).toEqual('BUTTON');
  });

  it('should render text correctly', () => {
    const text = 'text';
    const { container: { firstChild } } = render(
      <PlainButton>
        {text}
      </PlainButton>,
    );
    expect(firstChild).toHaveTextContent(text);
    expect(firstChild).toMatchSnapshot();
  });
});
