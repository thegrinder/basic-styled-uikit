import React from 'react';
import { render } from '@testing-library/react';

import SpinnerWrapper from '../SpinnerWrapper';

describe('<SpinnerWrapper />', () => {
  it('should render correctly', () => {
    const {
      container: { firstChild },
    } = render(<SpinnerWrapper />);
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <span> tag', () => {
    const {
      container: { firstChild },
    } = render(<SpinnerWrapper />);
    expect(firstChild.tagName).toEqual('SPAN');
  });
});
