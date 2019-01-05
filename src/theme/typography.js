const defaultOptions = {
  addMarginBottom: true,
  proximity: false,
  proximityFactor: 0.85,
};

export const getTextOptions = theme => ({
  ...defaultOptions,
  ...theme.uiKit.typography.global,
  ...theme.uiKit.typography.text,
});

export const getHeadingOptions = theme => ({
  ...defaultOptions,
  ...theme.uiKit.typography.global,
  ...theme.uiKit.typography.heading,
});

const typography = {
  global: {
    baseFontSize: '16px',
    baseLineHeight: 1.5,
  },
  text: {
    baseFontScale: [3, 2.5, 2, 1.5, 1.25, 1],
  },
  heading: {
    baseFontScale: [3, 2.5, 2, 1.5, 1.25, 1],
  },
};

export default typography;
