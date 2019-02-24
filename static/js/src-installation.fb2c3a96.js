(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/installation.mdx":function(n,o,r){"use strict";r.r(o),r.d(o,"default",function(){return p});var e=r("./node_modules/react/index.js"),a=r.n(e),t=r("./node_modules/@mdx-js/tag/dist/index.js");function c(n){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,o){if(null==n)return{};var r,e,a=function(n,o){if(null==n)return{};var r,e,a={},t=Object.keys(n);for(e=0;e<t.length;e++)r=t[e],o.indexOf(r)>=0||(a[r]=n[r]);return a}(n,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(e=0;e<t.length;e++)r=t[e],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}function l(n,o){for(var r=0;r<o.length;r++){var e=o[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function i(n,o){return!o||"object"!==c(o)&&"function"!==typeof o?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):o}function m(n){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,o){return(d=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n})(n,o)}var p=function(n){function o(n){var r;return function(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),(r=i(this,m(o).call(this,n))).layout=null,r}var r,e,c;return function(n,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),o&&d(n,o)}(o,a.a.Component),r=o,(e=[{key:"render",value:function(){var n=this.props,o=n.components;s(n,["components"]);return a.a.createElement(t.MDXTag,{name:"wrapper",components:o},a.a.createElement(t.MDXTag,{name:"h1",components:o,props:{id:"installation"}},"Installation"),a.a.createElement(t.MDXTag,{name:"h2",components:o,props:{id:"npm"}},"npm"),a.a.createElement(t.MDXTag,{name:"p",components:o},"Basic-styled-uikit is ",a.a.createElement(t.MDXTag,{name:"a",components:o,parentName:"p",props:{href:"https://www.npmjs.com/package/basic-styled-uikit"}},"available on npm")," and it can be installed using npm or yarn."),a.a.createElement(t.MDXTag,{name:"pre",components:o},a.a.createElement(t.MDXTag,{name:"code",components:o,parentName:"pre",props:{}},"# Using npm\nnpm install basic-styled-uikit --save\n\n# Using Yarn\nyarn add basic-styled-uikit\n")),a.a.createElement(t.MDXTag,{name:"h2",components:o,props:{id:"setup"}},"setup"),a.a.createElement(t.MDXTag,{name:"p",components:o},"Basic-styled-uikit uses styled-components under the hood and that's why you have to wrap your application with its ",a.a.createElement(t.MDXTag,{name:"inlineCode",components:o,parentName:"p"},"<ThemeProvider>"),"\nin order to use it. We also provide you with a theme so you can get going right away."),a.a.createElement(t.MDXTag,{name:"pre",components:o},a.a.createElement(t.MDXTag,{name:"code",components:o,parentName:"pre",props:{className:"language-js"}},"import React from 'react';\nimport { ThemeProvider } from 'styled-components';\nimport theme from 'basic-styled-uikit/dist/theme';\n\n// root component\nconst App = () => (\n  <ThemeProvider theme={theme}>\n    {/* rest of your top level components */}\n  </ThemeProvider>\n);\n\nexport default App;\n")),a.a.createElement(t.MDXTag,{name:"h2",components:o,props:{id:"customization"}},"customization"),a.a.createElement(t.MDXTag,{name:"p",components:o},"Basic-styled-uikit is highly customizable and can be used as a starting point in most project.\nIf you want to change the styling of the provided components, all you have to do is modify the theme.\nInstead of importing it from the library like above, just create a file, copy the following content,\nmodify it the way you want and pass it to the ",a.a.createElement(t.MDXTag,{name:"inlineCode",components:o,parentName:"p"},"<ThemeProvider>")," as the ",a.a.createElement(t.MDXTag,{name:"inlineCode",components:o,parentName:"p"},"theme")," prop. Not only can you modify\nthe values of different properties below but you can also remove and add the style rules you want;\nthey all get mapped to regular css."),a.a.createElement(t.MDXTag,{name:"pre",components:o},a.a.createElement(t.MDXTag,{name:"code",components:o,parentName:"pre",props:{className:"language-js"}},"/**\n * Colors\n */\nconst colors = {\n  inherit: 'inherit',\n  transparent: 'transparent',\n  white: '#fff',\n  gray50: '#fafafa',\n  gray100: '#f8f9fa',\n  gray200: '#e9ecef',\n  gray300: '#dee2e6',\n  gray400: '#ced4da',\n  gray450: '#bec5cc',\n  gray500: '#adb5bd',\n  gray600: '#868e96',\n  gray700: '#495057',\n  gray800: '#343a40',\n  gray900: '#212529',\n  black: '#161616',\n\n  primary50: '#e3f2fd',\n  primary100: '#bbdefb',\n  primary200: '#90caf9',\n  primary300: '#64b5f6',\n  primary400: '#42a5f5',\n  primary500: '#2196f3',\n  primary600: '#1e88e5',\n  primary700: '#1976d2',\n  primary800: '#1565c0',\n  primary900: '#0d47a1',\n\n  success50: '#e8f5e9',\n  success100: '#c8e6c9',\n  success200: '#a5d6a7',\n  success300: '#81c784',\n  success400: '#66bb6a',\n  success500: '#4caf50',\n  success600: '#43a047',\n  success700: '#388e3c',\n  success800: '#2e7d32',\n  success900: '#1b5e20',\n\n  warning50: '#fffde7',\n  warning100: '#fff9c4',\n  warning200: '#fff59d',\n  warning300: '#fff176',\n  warning400: '#ffee58',\n  warning500: '#ffeb3b',\n  warning600: '#fdd835',\n  warning700: '#fbc02d',\n  warning800: '#f9a825',\n  warning900: '#f57f17',\n\n  danger50: '#ffebee',\n  danger100: '#ffcdd2',\n  danger200: '#ef9a9a',\n  danger300: '#e57373',\n  danger400: '#ef5350',\n  danger500: '#f44336',\n  danger600: '#e53935',\n  danger700: '#d32f2f',\n  danger800: '#c62828',\n  danger900: '#b71c1c',\n};\n\n\n/**\n * Typography\n */\nconst typography = {\n  baseFontSize: 16,\n  baseLineHeight: 1.5,\n};\n\n\n/**\n * Button\n */\nconst button = {\n  btnTypes: {\n    basic: {\n      normal: {\n        color: colors.gray900,\n        backgroundColor: colors.transparent,\n        borderColor: colors.gray300,\n      },\n      hover: {\n        color: colors.gray900,\n        backgroundColor: colors.transparent,\n        borderColor: colors.gray400,\n      },\n      active: {\n        color: colors.gray900,\n        backgroundColor: colors.transparent,\n        borderColor: colors.gray500,\n      },\n    },\n    default: {\n      normal: {\n        color: colors.black,\n        backgroundColor: colors.gray400,\n        borderColor: colors.transparent,\n      },\n      hover: {\n        color: colors.black,\n        backgroundColor: colors.gray450,\n        borderColor: colors.transparent,\n      },\n      active: {\n        color: colors.black,\n        backgroundColor: colors.gray500,\n        borderColor: colors.transparent,\n      },\n    },\n    primary: {\n      normal: {\n        color: colors.white,\n        backgroundColor: colors.primary500,\n        borderColor: colors.transparent,\n      },\n      hover: {\n        color: colors.white,\n        backgroundColor: colors.primary600,\n        borderColor: colors.transparent,\n      },\n      active: {\n        color: colors.white,\n        backgroundColor: colors.primary700,\n        borderColor: colors.transparent,\n      },\n    },\n    danger: {\n      normal: {\n        color: colors.white,\n        backgroundColor: colors.danger500,\n        borderColor: colors.transparent,\n      },\n      hover: {\n        color: colors.white,\n        backgroundColor: colors.danger600,\n        borderColor: colors.transparent,\n      },\n      active: {\n        color: colors.white,\n        backgroundColor: colors.danger700,\n        borderColor: colors.transparent,\n      },\n    },\n  },\n  sizings: {\n    s: {\n      padding: '0 1rem',\n      lineHeight: '1.75rem',\n      fontSize: '.875rem',\n    },\n    m: {\n      padding: '0 1.875rem',\n      fontSize: '1rem',\n      lineHeight: '2.375rem',\n    },\n    l: {\n      padding: '0 2.5rem',\n      lineHeight: '3.375rem',\n      fontSize: '1.375rem',\n    },\n  },\n  common: {\n    fontWeight: '700',\n    fontFamily: 'Lato, Arial, Helvetica, sans-serif',\n  },\n};\n\n\n/**\n * Form\n */\nconst form = {\n  // text input, textarea, and select\n  regular: {\n    states: {\n      valid: {\n        normal: {\n          backgroundColor: colors.white,\n          borderColor: colors.gray300,\n          color: colors.gray700,\n        },\n        active: {\n          backgroundColor: colors.white,\n          borderColor: colors.primary500,\n          color: colors.gray700,\n        },\n        disabled: {\n          backgroundColor: colors.gray100,\n          borderColor: colors.gray300,\n          color: colors.gray600,\n        },\n      },\n      invalid: {\n        backgroundColor: colors.white,\n        color: colors.danger500,\n        borderColor: colors.danger500,\n      },\n    },\n    common: {\n      fontSize: '1rem',\n      fontFamily: 'Lato, Arial, Helvetica, sans-serif',\n    },\n  },\n  // inline input\n  inline: {\n    states: {\n      valid: {\n        normal: {\n          backgroundColor: colors.transparent,\n          borderColor: colors.transparent,\n          color: colors.gray700,\n        },\n        hover: {\n          backgroundColor: colors.transparent,\n          borderColor: colors.gray300,\n          color: colors.gray700,\n        },\n        active: {\n          backgroundColor: colors.transparent,\n          borderColor: colors.primary500,\n          color: colors.gray700,\n        },\n        disabled: {\n          backgroundColor: colors.gray100,\n          borderColor: colors.gray300,\n          color: colors.gray600,\n        },\n      },\n      invalid: {\n        backgroundColor: colors.transparent,\n        color: colors.danger500,\n        borderColor: colors.danger500,\n      },\n    },\n    common: {\n      fontSize: '1rem',\n      fontFamily: 'Lato, Arial, Helvetica, sans-serif',\n    },\n  },\n  // radio and checkbox\n  misc: {\n    states: {\n      valid: {\n        normal: {\n          borderColor: colors.gray300,\n          backgroundColor: colors.transparent,\n        },\n        active: {\n          borderColor: colors.primary500,\n          backgroundColor: colors.transparent,\n        },\n        checked: {\n          borderColor: colors.transparent,\n          backgroundColor: colors.primary500,\n        },\n      },\n      invalid: {\n        borderColor: colors.danger500,\n        backgroundColor: colors.transparent,\n      },\n    },\n    common: {},\n  },\n  // toggle\n  toggle: {\n    states: {\n      normal: {\n        backgroundColor: colors.gray400,\n      },\n      checked: {\n        backgroundColor: colors.primary500,\n      },\n    },\n  },\n};\n\n\n/**\n * Heading\n */\nconst heading = {\n  sizings: {\n    h1: {\n      fontSize: '3rem',\n    },\n    h2: {\n      fontSize: '2.5rem',\n    },\n    h3: {\n      fontSize: '2rem',\n    },\n    h4: {\n      fontSize: '1.5rem',\n    },\n    h5: {\n      fontSize: '1.25rem',\n    },\n    h6: {\n      fontSize: '1rem',\n    },\n  },\n  colors: {\n    white: colors.white,\n    light: colors.gray700,\n    default: colors.gray800,\n    dark: colors.gray900,\n    black: colors.black,\n\n    primary: colors.primary500,\n    success: colors.success500,\n    warning: colors.warning500,\n    danger: colors.danger500,\n  },\n  common: {\n    fontWeight: 700,\n    fontFamily: 'Lato, Arial, Helvetica, sans-serif',\n  },\n};\n\n\n/**\n * Text\n */\nconst text = {\n  sizings: {\n    l: {\n      fontSize: '1.25rem',\n    },\n    m: {\n      fontSize: '1rem',\n    },\n    s: {\n      fontSize: '.875rem',\n    },\n    xs: {\n      fontSize: '.75rem',\n    },\n  },\n  colors: {\n    white: colors.white,\n    light: colors.gray600,\n    default: colors.gray700,\n    dark: colors.gray800,\n    black: colors.black,\n\n    primary: colors.primary500,\n    success: colors.success500,\n    warning: colors.warning500,\n    danger: colors.danger500,\n  },\n  common: {\n    fontWeight: 400,\n    fontFamily: 'Lato, Arial, Helvetica, sans-serif',\n  },\n};\n\n\n/**\n * ColorBox\n */\nconst colorBox = {\n  bgColors: {\n    transparent: colors.transparent,\n    inherit: colors.inherit,\n    white: colors.white,\n    lightest: colors.gray50,\n    lighter: colors.gray100,\n    light: colors.gray200,\n    normal: colors.gray300,\n    dark: colors.gray400,\n    darker: colors.gray500,\n    darkest: colors.gray600,\n\n    washedPrimary: colors.primary50,\n    primary: colors.primary500,\n    washedSuccess: colors.success50,\n    success: colors.success500,\n    washedDanger: colors.danger50,\n    danger: colors.danger500,\n    washedWarning: colors.warning50,\n    warning: colors.warning500,\n  },\n  borderColors: {\n    transparent: colors.transparent,\n    white: colors.white,\n    light: colors.gray100,\n    normal: colors.gray200,\n    dark: colors.gray300,\n    primary: colors.primary100,\n    success: colors.success100,\n    warning: colors.warning100,\n    danger: colors.danger100,\n  },\n};\n\n\n/**\n * Link\n */\nconst link = {\n  linkTypes: {\n    default: {\n      normal: {\n        color: colors.primary500,\n      },\n      hover: {\n        color: colors.primary600,\n      },\n    },\n    muted: {\n      normal: {\n        color: colors.gray600,\n      },\n      hover: {\n        color: colors.gray700,\n      },\n    },\n  },\n  common: {\n    fontFamily: 'Lato, Arial, Helvetica, sans-serif',\n  },\n};\n\n\nconst theme = {\n  uiKit: {\n    typography,\n    colors,\n    button,\n    form,\n    heading,\n    text,\n    colorBox,\n    link,\n  },\n};\n\nexport default theme;\n")))}}])&&l(r.prototype,e),c&&l(r,c),o}();p.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-installation.27f912fee2f498a05920.js.map