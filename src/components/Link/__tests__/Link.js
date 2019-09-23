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
  it('should render with default styles and its children', () => {
    const { queryByText } = renderComponent();
    const link = queryByText(children);
    expect(link).toBeTruthy();
    expect(link).toHaveStyleRule('color', defaultColor);
  });

  it('should render with correct styles based on custom props', () => {
    const { getByText } = renderComponent({
      linkType: 'muted',
    });
    const link = getByText(children);
    expect(link).toHaveStyleRule('color', mutedColor);
  });

  it('should render <a> tag by default', () => {
    const { getByText } = renderComponent();
    expect(getByText(children).tagName).toEqual('A');
  });

  it('should render render <button> tag', () => {
    const { getByText } = renderComponent({ as: 'button' });
    expect(getByText(children).tagName).toEqual('BUTTON');
  });
});
