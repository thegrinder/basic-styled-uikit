import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import ContentWrapper from '../ContentWrapper';

describe('<ContentWrapper />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { container: { firstChild } } = render(
      <ContentWrapper submitting={true} />,
    );
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <span> tag', () => {
    const { container: { firstChild } } = render(
      <ContentWrapper submitting={true} />,
    );
    expect(firstChild.tagName).toEqual('SPAN');
  });

  it('should render content correctly', () => {
    const content = 'content';
    const { container: { firstChild } } = render(
      <ContentWrapper submitting={true}>
        {content}
      </ContentWrapper>,
    );
    expect(firstChild).toHaveTextContent(content);
    expect(firstChild).toMatchSnapshot();
  });
});
