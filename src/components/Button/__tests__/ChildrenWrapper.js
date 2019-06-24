import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import ChildrenWrapper from '../ChildrenWrapper';

describe('<ChildrenWrapper />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container: { firstChild } } = render(
      <ChildrenWrapper />,
    );
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <span> tag', () => {
    const { container: { firstChild } } = render(
      <ChildrenWrapper />,
    );
    expect(firstChild.tagName).toEqual('SPAN');
  });
});
