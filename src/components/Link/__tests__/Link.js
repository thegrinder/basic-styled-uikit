import React from 'react';
import { render } from '../../../test-utils';
import LinkProvider from '../LinkProvider';
import Link from '../Link';

const defaultColor = '#1e88e5';
const mutedColor = '#868e96';
const theme = {
  linkTypes: {
    default: {
      normal: {
        color: defaultColor,
      },
    },
    muted: {
      normal: {
        color: mutedColor,
      },
    },
  },
  common: {
    fontFamily: `'Inter var', sans-serif`,
  },
};
const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <LinkProvider theme={theme}>
      <Link {...props}>{children}</Link>
    </LinkProvider>
  );

describe('<Link />', () => {
  it('should render correctly with default props and its children', () => {
    const { queryByText } = renderComponent();
    const link = queryByText(children);
    expect(link).toBeTruthy();
    expect(link).toHaveStyleRule('color', defaultColor);
  });

  it('should render with correct styles based on custom props', () => {
    const { queryByText } = renderComponent({
      linkType: 'muted',
    });
    const link = queryByText(children);
    expect(link).toHaveStyleRule('color', mutedColor);
  });

  it('should render <a> tag by default', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children).tagName).toEqual('A');
  });

  it('should render render <button> tag', () => {
    const { queryByText } = renderComponent({ as: 'button' });
    expect(queryByText(children).tagName).toEqual('BUTTON');
  });
});
