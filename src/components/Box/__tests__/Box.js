import React from 'react';
import { render } from '../../../test-utils';
import BoxProvider from '../BoxProvider';
import Box from '../Box';

const children = 'children';

const neutral = '#fff';
const boxShadow = '0 3px 1px -2px #fff';
const theme = {
  bgColors: {
    neutral,
  },
  elevations: {
    1: {
      boxShadow,
    },
  },
};

const renderComponent = (props = {}) =>
  render(
    <BoxProvider theme={theme}>
      <Box {...props}>{children}</Box>
    </BoxProvider>
  );

describe('<Box />', () => {
  it('should render correctly with no props and children', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render with correct styles based on the props', () => {
    const { queryByText } = renderComponent({
      bgColor: 'neutral',
      elevation: 1,
    });
    expect(queryByText(children)).toHaveStyleRule('background-color', neutral);
    expect(queryByText(children)).toHaveStyleRule('box-shadow', boxShadow);
  });

  it('should render <div> tag', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children).tagName).toEqual('DIV');
  });
});
