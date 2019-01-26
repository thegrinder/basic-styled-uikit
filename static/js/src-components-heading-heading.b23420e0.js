(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/components/ColorBox/ColorBox.js":function(e,n,o){"use strict";var r=o("./node_modules/react/index.js"),t=o.n(r),a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=o("./node_modules/prop-types/index.js"),c=function(e,n){return e.uiKit.colorBox.bgColors[n]},s={bgColor:i.string,borderColor:i.string},l=a.c.div.withConfig({displayName:"ColorBox__StyledColorBox",componentId:"sc-105jy39-0"})(["box-sizing:border-box;"," ",""],function(e){var n=e.theme,o=e.bgColor;return c(n,o)?Object(a.b)(["background-color:",";"],c(n,o)):""},function(e){var n=function(e,n){return e.uiKit.colorBox.borderColors[n]}(e.theme,e.borderColor);return n?Object(a.b)(["border-color:",";"],n):""});l.propTypes=s;var d=function(e){return t.a.createElement(l,e)};n.a=d;d.__docgenInfo={description:"",methods:[],displayName:"ColorBox",props:{bgColor:{type:{name:"string"},required:!1,description:"one of: transparent, inherit, white, lightest, lighter, light, normal, dark, darker, darkest,\nwashedPrimary, primary, washedSuccess, success, washedDanger, danger, washedWarning, warning"},borderColor:{type:{name:"string"},required:!1,description:"one of: transparent, white, light, normal, dark, primary, success, warning, danger"}}}},"./src/components/Heading/Heading.mdx":function(e,n,o){"use strict";o.r(n);var r=o("./node_modules/react/index.js"),t=o.n(r),a=o("./node_modules/@mdx-js/tag/dist/index.js"),i=o("./node_modules/docz/dist/index.m.js"),c=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=o("./node_modules/prop-types/index.js"),l=o("./src/theme/typography.js"),d=o("./src/helpers/utils.js"),g=function(e){var n=e.theme,o=e.sizing;return n.uiKit.heading.sizings[o]},u=Object(d.b)(g),m=Object(d.b)(function(e){return e.theme.uiKit.heading.common}),p={color:s.string.isRequired,sizing:s.string.isRequired,marginBottom:s.bool.isRequired},h=c.c.h1.withConfig({displayName:"StyledHeading",componentId:"fbinjh-0"})(["display:block;margin:0;padding:0;"," "," "," line-height:",";margin-bottom:",";"],m,u,function(e){var n=e.theme,o=e.color;return Object(c.b)(["color:",";"],function(e,n){return e.uiKit.heading.colors[n]}(n,o))},function(e){return Object(d.a)(g(e).fontSize,Object(l.c)(e))},function(e){return e.marginBottom?"".concat(Object(l.c)(e),"rem"):"0"});h.propTypes=p;var f=h;function b(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var H=function(e){var n=e.sizing,o=e.color,r=e.marginBottom,a=e.as,i=b(e,["sizing","color","marginBottom","as"]);return t.a.createElement(f,Object.assign({as:a,sizing:n||a,marginBottom:r,color:o},i))};H.defaultProps={color:"default",marginBottom:!1};var y=H;H.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{color:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:"one of: white, light, default, dark, black, primary, success, warning, danger"},marginBottom:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"if true adds a bottom margin according to vertical rhythm"},sizing:{type:{name:"enum",value:[{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'h4'",computed:!1},{value:"'h5'",computed:!1},{value:"'h6'",computed:!1}]},required:!1,description:"determines the size of the heading"},as:{type:{name:"enum",value:[{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'h4'",computed:!1},{value:"'h5'",computed:!1},{value:"'h6'",computed:!1}]},required:!0,description:"determines the html tag and size, if sizing prop is not specified"}}};var v=o("./src/components/ColorBox/ColorBox.js");function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}function j(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,n){return!n||"object"!==_(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,n){return(x=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}o.d(n,"default",function(){return B});var B=function(e){function n(e){var o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(o=E(this,O(n).call(this,e))).layout=null,o}var o,r,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&x(e,n)}(n,t.a.Component),o=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,o=w(e,["components"]);return t.a.createElement(a.MDXTag,{name:"wrapper",components:n},t.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"heading"}},"Heading"),t.a.createElement(i.f,{of:y}),t.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"heading-sizes"}},"Heading sizes"),t.a.createElement(i.e,{__position:1,__code:'<Heading as="h1">Heading H1</Heading>\n<Heading as="h2">Heading H2</Heading>\n<Heading as="h3">Heading H3</Heading>\n<Heading as="h4">Heading H4</Heading>\n<Heading as="h5">Heading H5</Heading>\n<Heading as="h6">Heading H6</Heading>\n<Heading as="h6" sizing="h1">\n  Big H6 heading\n</Heading>\n<Heading as="h1" sizing="h6">\n  Small H1 heading\n</Heading>',__scope:{props:this?this.props:o,Heading:y,ColorBox:v.a}},t.a.createElement(y,{as:"h1"},"Heading H1"),t.a.createElement(y,{as:"h2"},"Heading H2"),t.a.createElement(y,{as:"h3"},"Heading H3"),t.a.createElement(y,{as:"h4"},"Heading H4"),t.a.createElement(y,{as:"h5"},"Heading H5"),t.a.createElement(y,{as:"h6"},"Heading H6"),t.a.createElement(y,{as:"h6",sizing:"h1"},"Big H6 heading"),t.a.createElement(y,{as:"h1",sizing:"h6"},"Small H1 heading")),t.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"heading-colors"}},"Heading colors"),t.a.createElement(i.e,{__position:2,__code:'<ColorBox bgColor="darkest">\n  <Heading as="h3" color="white">\n    White color heading\n  </Heading>\n</ColorBox>\n<Heading as="h3" color="light">\n  Light color heading\n</Heading>\n<Heading as="h3" color="default">\n  Default color heading\n</Heading>\n<Heading as="h3" color="dark">\n  Dark color heading\n</Heading>\n<Heading as="h3" color="black">\n  Black color heading\n</Heading>\n<Heading as="h3" color="primary">\n  Primary color heading\n</Heading>\n<Heading as="h3" color="success">\n  Success color heading\n</Heading>\n<Heading as="h3" color="danger">\n  Danger color heading\n</Heading>\n<Heading as="h3" color="warning">\n  Warning color heading\n</Heading>',__scope:{props:this?this.props:o,Heading:y,ColorBox:v.a}},t.a.createElement(v.a,{bgColor:"darkest"},t.a.createElement(y,{as:"h3",color:"white"},"White color heading")),t.a.createElement(y,{as:"h3",color:"light"},"Light color heading"),t.a.createElement(y,{as:"h3",color:"default"},"Default color heading"),t.a.createElement(y,{as:"h3",color:"dark"},"Dark color heading"),t.a.createElement(y,{as:"h3",color:"black"},"Black color heading"),t.a.createElement(y,{as:"h3",color:"primary"},"Primary color heading"),t.a.createElement(y,{as:"h3",color:"success"},"Success color heading"),t.a.createElement(y,{as:"h3",color:"danger"},"Danger color heading"),t.a.createElement(y,{as:"h3",color:"warning"},"Warning color heading")),t.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"heading-with-a-bottom-margin"}},"Heading with a bottom margin"),t.a.createElement(i.e,{__position:3,__code:'<Heading as="h3" marginBottom={true}>\n  Heading with margin\n</Heading>\n<p>Sample paragraph.</p>',__scope:{props:this?this.props:o,Heading:y,ColorBox:v.a}},t.a.createElement(y,{as:"h3",marginBottom:!0},"Heading with margin"),t.a.createElement("p",null,"Sample paragraph.")))}}])&&j(o.prototype,r),c&&j(o,c),n}();B.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-heading-heading.f71e593218f71150a2cc.js.map