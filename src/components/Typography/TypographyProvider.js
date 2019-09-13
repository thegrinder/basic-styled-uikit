import { createProvider } from '../../helpers';

export const minimalTheme = {
  baseFontSize: 16,
  baseLineHeight: 1.5,
  opacities: {
    high: 1,
  },
  colors: {
    neutral: '#000',
  },
  text: {
    sizings: {
      m: {
        fontSize: '1rem',
      },
    },
  },
  heading: {
    sizings: {
      h1: {
        fontSize: '3rem',
      },
      h2: {
        fontSize: '2.5rem',
      },
      h3: {
        fontSize: '2rem',
      },
      h4: {
        fontSize: '1.5rem',
      },
      h5: {
        fontSize: '1.25rem',
      },
      h6: {
        fontSize: '1rem',
      },
    },
  },
};

const TypographyProvider = createProvider('typography', minimalTheme);

export default TypographyProvider;
