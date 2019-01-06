export const defaultOptions = {
  addMarginBottom: true,
  proximity: false,
  proximityFactor: 0.85,
};

export const getTextOptions = theme => ({
  ...defaultOptions,
  ...theme.uiKit.typography.global,
  ...theme.uiKit.typography.text,
});

const typography = {
  global: {
    baseFontSize: '16px',
    baseLineHeight: 1.5,
  },
};

export default typography;
