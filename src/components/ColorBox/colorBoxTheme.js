import { lighten } from 'polished';

export const colorBoxDarkTheme = {
  bgColors: {
    neutral: '#161616',
    primary: '#42A5F5',
    success: '#66BB6A',
    warning: '#FFEE58',
    danger: '#FF8A65',
  },
  elevations: {
    1: {
      backgroundColor: lighten(0.03, '#161616'),
    },
    2: {
      backgroundColor: lighten(0.06, '#161616'),
    },
  },
};

export const colorBoxBaseTheme = {
  bgColors: {
    neutral: '#fff',
    primary: '#1E88E5',
    success: '#43A047',
    warning: '#FDD835',
    danger: '#F4511E',
  },
  elevations: {
    1: {
      boxShadow:
        '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
    },
    2: {
      boxShadow:
        '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
    },
  },
};
