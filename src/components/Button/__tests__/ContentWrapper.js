import React from 'react';
import { render } from '@testing-library/react';

import ContentWrapper from '../ContentWrapper';

const testId = 'content-wrapper';

describe('<ContentWrapper />', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <ContentWrapper data-testid={testId} submitting />
    );
    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render <span> tag', () => {
    const {
      container: { firstChild },
    } = render(<ContentWrapper submitting />);
    expect(firstChild.tagName).toEqual('SPAN');
  });

  it('should render content correctly', () => {
    const content = 'content';
    const { getByText } = render(
      <ContentWrapper submitting>{content}</ContentWrapper>
    );
    expect(getByText(content)).toBeTruthy();
  });
});
