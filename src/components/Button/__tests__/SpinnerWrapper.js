import React from 'react';
import { render } from '@testing-library/react';

import SpinnerWrapper from '../SpinnerWrapper';

const testId = 'spinner-wrapper';

const renderComponent = () => render(<SpinnerWrapper data-testid={testId} />);

describe('<SpinnerWrapper />', () => {
  it('should render correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render <span> tag', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId).tagName).toEqual('SPAN');
  });
});
