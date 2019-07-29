import React from 'react';
import { render, cleanup } from '@testing-library/react';


import SpinnerWrapper from '../SpinnerWrapper';

describe('<SpinnerWrapper />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container: { firstChild } } = render(
      <SpinnerWrapper />,
    );
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <span> tag', () => {
    const { container: { firstChild } } = render(
      <SpinnerWrapper />,
    );
    expect(firstChild.tagName).toEqual('SPAN');
  });
});
