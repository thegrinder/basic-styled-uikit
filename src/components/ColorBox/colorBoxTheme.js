// import { lighten } from 'polished';
import colors from '../../theme/colors';

const lightColorBoxTheme = {
  bgColors: {
    neutral: colors.neutral0,
    primary: colors.primary500,
    success: colors.success500,
    warning: colors.warning500,
    danger: colors.danger500,
  },
  elevations: {
    1: {
      boxShadow: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
    },
    2: {
      boxShadow: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
    },
  },
};

// const darkColorBoxTheme = {
//   bgColors: {
//     neutral: colors.neutral1000,
//     primary: colors.primary200,
//     success: colors.success200,
//     warning: colors.warning200,
//     danger: colors.danger200,
//   },
//   elevations: {
//     1: {
//       backgroundColor: lighten(0.02, colors.neutral1000),
//     },
//     2: {
//       backgroundColor: lighten(0.04, colors.neutral1000),
//     },
//   },
// };


export default lightColorBoxTheme;
