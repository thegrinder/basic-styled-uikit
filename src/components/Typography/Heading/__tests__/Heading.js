import React from 'react';
import { render } from '../../../../test-utils';
import { Box } from '../../../Box';
import TypographyProvider from '../../TypographyProvider';
import Heading from '../Heading';

const neutralColor = '#161616';
const primaryColor = '#1e88e5';
const neutralOnPrimaryBg = '#fff';
const highEmphasis = '1';
const mediumEmphasis = '0.8';
const h1FontSize = '3rem';
const h2FontSize = '2rem';
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
  heading: {
    sizings: {
      h1: {
        fontSize: h1FontSize,
      },
      h2: {
        fontSize: h2FontSize,
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
        <Heading as="h1" {...props}>
          {children}
        </Heading>
      </Box>
    </TypographyProvider>
  );

const renderComponent = (props = {}) =>
  render(
    <TypographyProvider theme={theme}>
      <Heading as="h1" {...props}>
        {children}
      </Heading>
    </TypographyProvider>
  );

describe('<Heading />', () => {
  it('should render with default styles and children', () => {
    const { getByText } = renderComponent();
    const heading = getByText(children);
    expect(heading).toHaveStyleRule('color', neutralColor);
    expect(heading).toHaveStyleRule('opacity', highEmphasis);
    expect(heading).toHaveStyleRule('font-size', h1FontSize);
    expect(heading).toHaveStyleRule('font-weight', fontWeight);
  });

  it('should render with correct styles based on custom props', () => {
    const { getByText } = renderComponent({
      sizing: 'h2',
      emphasis: 'medium',
      color: 'primary',
      marginBottom: true,
    });
    const heading = getByText(children);
    expect(heading).toHaveStyleRule('color', primaryColor);
    expect(heading).toHaveStyleRule('opacity', mediumEmphasis);
    expect(heading).toHaveStyleRule('font-size', h2FontSize);
    expect(heading).toHaveStyleRule('font-weight', fontWeight);
  });

  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(sizing => {
    it(`should render <${sizing}> tag`, () => {
      const { getByText } = renderComponent({
        as: sizing,
      });
      expect(getByText(children).tagName).toEqual(sizing.toUpperCase());
    });
  });

  it('should render large <h6> heading', () => {
    const { getByText } = renderComponent({
      sizing: 'h1',
      as: 'h6',
    });
    expect(getByText(children).tagName).toEqual('H6');
  });

  it('should render the correct color depending on the background', () => {
    const { getByText } = renderComponentWithBg();
    const heading = getByText(children);
    expect(heading).toHaveStyleRule('color', neutralOnPrimaryBg);
  });

  it('should render ignore background if ignoreBackground is set to true', () => {
    const { getByText } = renderComponentWithBg({
      ignoreBackground: true,
    });
    const heading = getByText(children);
    expect(heading).toHaveStyleRule('color', neutralColor);
  });
});
