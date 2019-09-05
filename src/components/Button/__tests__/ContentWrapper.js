import React from 'react';
import { render } from '@testing-library/react';

import ContentWrapper from '../ContentWrapper';

describe('<ContentWrapper />', () => {
  it('should render correctly', () => {
    const {
      container: { firstChild },
    } = render(<ContentWrapper submitting />);
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <span> tag', () => {
    const {
      container: { firstChild },
    } = render(<ContentWrapper submitting />);
    expect(firstChild.tagName).toEqual('SPAN');
  });

  it('should render content correctly', () => {
    const content = 'content';
    const {
      container: { firstChild },
    } = render(<ContentWrapper submitting>{content}</ContentWrapper>);
    expect(firstChild).toHaveTextContent(content);
  });
});
