import React from 'react';
import { render } from '../../../../test-utils';
import Heading from '../Heading';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <Heading as="h1" {...props}>
      {children}
    </Heading>
  );

describe('<Heading />', () => {
  it('should render correctly with default props', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { queryByText } = renderComponent({
      as: 'h3',
      color: 'primary',
      marginBottom: true,
    });
    expect(queryByText(children)).toBeTruthy();
  });

  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(sizing => {
    it(`should render <${sizing}> tag`, () => {
      const { queryByText } = renderComponent({
        as: sizing,
      });
      expect(queryByText(children).tagName).toEqual(sizing.toUpperCase());
    });
  });

  it('should render should large <h6> heading', () => {
    const { queryByText } = renderComponent({
      sizing: 'h1',
      as: 'h6',
    });
    expect(queryByText(children).tagName).toEqual('H6');
  });
});
