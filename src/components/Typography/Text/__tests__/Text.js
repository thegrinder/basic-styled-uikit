import React from 'react';
import { render } from '../../../../test-utils';
import { Box } from '../../../Box';
import TypographyProvider from '../../TypographyProvider';
import Text from '../Text';

const neutralColor = '#161616';
const primaryColor = '#1e88e5';
const neutralOnPrimaryBg = '#fff';
const highEmphasis = '1';
const mediumEmphasis = '0.8';
const largeFontSize = '3rem';
const mediumFontSize = '2rem';
const fontWeight = '600';

const theme = {
  baseFontSize: 16,
  baseLineHeight: 1.5,
  opacities: {
    high: highEmphasis,
    medium: mediumEmphasis,
  },
  colors: {
    neutral: neutralColor,
    primary: primaryColor,
  },
  onBackground: {
    primary: {
      neutral: neutralOnPrimaryBg,
    },
  },
  text: {
    sizings: {
      l: {
        fontSize: largeFontSize,
      },
      m: {
        fontSize: mediumFontSize,
      },
    },
    common: {
      fontWeight,
    },
  },
};

const children = 'children';

const renderComponentWithBg = (props = {}) =>
  render(
    <TypographyProvider theme={theme}>
      <Box bgColor="primary">
        <Text {...props}>{children}</Text>
      </Box>
    </TypographyProvider>
  );

const renderComponent = (props = {}) =>
  render(
    <TypographyProvider theme={theme}>
      <Text {...props}>{children}</Text>
    </TypographyProvider>
  );

describe('<Text />', () => {
  it('should render correctly with default props', () => {
    const { getByText } = renderComponent();
    const text = getByText(children);
    expect(text).toHaveStyleRule('color', neutralColor);
    expect(text).toHaveStyleRule('opacity', highEmphasis);
    expect(text).toHaveStyleRule('font-size', mediumFontSize);
    expect(text).toHaveStyleRule('font-weight', fontWeight);
  });

  it('should render with correct styles based on custom props', () => {
    const { getByText } = renderComponent({
      sizing: 'l',
      emphasis: 'medium',
      color: 'primary',
      marginBottom: true,
    });
    const text = getByText(children);
    expect(text).toHaveStyleRule('color', primaryColor);
    expect(text).toHaveStyleRule('opacity', mediumEmphasis);
    expect(text).toHaveStyleRule('font-size', largeFontSize);
    expect(text).toHaveStyleRule('font-weight', fontWeight);
  });

  it('should render <span> tag by default', () => {
    const { getByText } = renderComponent();
    expect(getByText(children).tagName).toEqual('SPAN');
  });

  it('should render render <p> tag', () => {
    const { getByText } = renderComponent({ as: 'p' });
    expect(getByText(children).tagName).toEqual('P');
  });

  it('should render the correct color depending on the background', () => {
    const { getByText } = renderComponentWithBg();
    const text = getByText(children);
    expect(text).toHaveStyleRule('color', neutralOnPrimaryBg);
  });

  it('should render ignore background if ignoreBackground is set to true', () => {
    const { getByText } = renderComponentWithBg({
      ignoreBackground: true,
    });
    const text = getByText(children);
    expect(text).toHaveStyleRule('color', neutralColor);
  });
});
