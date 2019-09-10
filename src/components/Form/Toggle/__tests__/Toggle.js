import React from 'react';
import { render } from '../../../../test-utils';
import Toggle from '../Toggle';

const renderComponent = (props = {}) =>
  render(<Toggle onChange={() => {}} {...props} />);

describe('<Toggle />', () => {
  it('should render correctly with default props', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const {
      container: { firstChild },
    } = renderComponent({
      h: 100,
      disabled: true,
    });
    expect(firstChild).toBeTruthy();
  });
});
