import React from 'react';
import { render } from '@testing-library/react';

import ToggleLabel from '../ToggleLabel';

const children = <span>children</span>;
const renderComponent = () => render(<ToggleLabel>{children}</ToggleLabel>);

describe('<ToggleLabel />', () => {
  it('should render correctly with children', () => {
    const {
      container: { firstChild },
      getByText,
    } = renderComponent();
    const childrenElement = getByText('children');
    expect(firstChild).toBeDefined();
    expect(firstChild).toContainElement(childrenElement);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <label> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('LABEL');
  });
});
