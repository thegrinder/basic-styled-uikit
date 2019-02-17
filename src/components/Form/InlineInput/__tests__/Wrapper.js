import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Wrapper from '../Wrapper';

const children = <span>children</span>;
const renderComponent = () => render(
  <Wrapper>{children}</Wrapper>,
);

describe('<Wrapper />', () => {
  afterEach(cleanup);

  it('should render correctly with children', () => {
    const { container: { firstChild }, getByText } = renderComponent();
    const childrenElement = getByText('children');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(childrenElement);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <div> tag', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild.tagName).toEqual('DIV');
  });
});
