(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docz/index.js":function(e,r,o){"use strict";var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n.c.div.withConfig({displayName:"Spacer",componentId:"sc-15p8eqj-0"})(["margin-bottom:16px;"]),t=n.c.span.withConfig({displayName:"Icon",componentId:"sc-1kriy8w-0"})(["width:10px;height:10px;border-radius:5px;background-color:#222;display:inline-block;margin:0 16px;"]),l=o("./node_modules/prop-types/index.js"),c=Object(n.d)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),s={color:l.string},i=n.c.span.withConfig({displayName:"Spinner",componentId:"sc-1d0xwhq-0"})(["width:20px;height:20px;border-radius:100%;border:2px solid ",";border-bottom-color:transparent;animation:"," 0.75s 0s infinite linear;vertical-align:middle;display:inline-block;"],function(e){return e.color},c);i.propTypes=s,i.defaultProps={color:"#fff"};var d=i,m={maxWidth:l.number},p=n.c.div.withConfig({displayName:"InputWrapper",componentId:"wxf916-0"})(["max-width:","px;"],function(e){return e.maxWidth});p.propTypes=m,p.defaultProps={maxWidth:300};var u=p;o.d(r,"c",function(){return a}),o.d(r,"a",function(){return t}),o.d(r,"d",function(){return d}),o.d(r,"b",function(){return u})},"./src/components/ColorBox/ColorBox.js":function(e,r,o){"use strict";var n=o("./node_modules/react/index.js"),a=o.n(n),t=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=o("./node_modules/prop-types/index.js"),c=function(e,r){return e.uiKit.colorBox.bgColors[r]},s={bgColor:l.string,borderColor:l.string},i=t.c.div.withConfig({displayName:"ColorBox__StyledColorBox",componentId:"sc-105jy39-0"})(["box-sizing:border-box;"," ",""],function(e){var r=e.theme,o=e.bgColor;return c(r,o)?Object(t.b)(["background-color:",";"],c(r,o)):""},function(e){var r=function(e,r){return e.uiKit.colorBox.borderColors[r]}(e.theme,e.borderColor);return r?Object(t.b)(["border-color:",";"],r):""});i.propTypes=s;var d=function(e){return a.a.createElement(i,e)};r.a=d;d.__docgenInfo={description:"",methods:[],displayName:"ColorBox",props:{bgColor:{type:{name:"string"},required:!1,description:"one of: transparent, inherit, white, lightest, lighter, light, normal, dark, darker, darkest,\nwashedPrimary, primary, washedSuccess, success, washedDanger, danger, washedWarning, warning"},borderColor:{type:{name:"string"},required:!1,description:"one of: transparent, white, light, normal, dark, primary, success, warning, danger"}}}},"./src/components/ColorBox/ColorBox.mdx":function(e,r,o){"use strict";o.r(r),o.d(r,"default",function(){return C});var n=o("./node_modules/react/index.js"),a=o.n(n),t=o("./node_modules/@mdx-js/tag/dist/index.js"),l=o("./node_modules/docz/dist/index.m.js"),c=o("./src/components/ColorBox/ColorBox.js"),s=o("./docz/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,r){if(null==e)return{};var o,n,a=function(e,r){if(null==e)return{};var o,n,a={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function m(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,r){return!r||"object"!==i(r)&&"function"!==typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,r){return(b=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var C=function(e){function r(e){var o;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),(o=p(this,u(r).call(this,e))).layout=null,o}var o,n,i;return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&b(e,r)}(r,a.a.Component),o=r,(n=[{key:"render",value:function(){var e=this.props,r=e.components,o=d(e,["components"]);return a.a.createElement(t.MDXTag,{name:"wrapper",components:r},a.a.createElement(t.MDXTag,{name:"h1",components:r,props:{id:"colorbox"}},"ColorBox"),a.a.createElement(l.f,{of:c.a}),a.a.createElement(t.MDXTag,{name:"h3",components:r,props:{id:"colorbox-backgrounds"}},"ColorBox backgrounds"),a.a.createElement(l.e,{__position:1,__code:'<ColorBox bgColor="primary">primary</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedPrimary">washedPrimary</ColorBox>\n<Spacer />\n<ColorBox bgColor="danger">danger</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedDanger">washedDanger</ColorBox>\n<Spacer />\n<ColorBox bgColor="success">success</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedSuccess">washedSuccess</ColorBox>\n<Spacer />\n<ColorBox bgColor="warning">warning</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedWarning">washedWarning</ColorBox>\n<Spacer />\n<ColorBox bgColor="transparent">transparent</ColorBox>\n<Spacer />\n<ColorBox bgColor="inherit">inherit</ColorBox>\n<Spacer />\n<ColorBox bgColor="white">white</ColorBox>\n<Spacer />\n<ColorBox bgColor="lightest">lightest</ColorBox>\n<Spacer />\n<ColorBox bgColor="lighter">lighter</ColorBox>\n<Spacer />\n<ColorBox bgColor="light">light</ColorBox>\n<Spacer />\n<ColorBox bgColor="normal">normal</ColorBox>\n<Spacer />\n<ColorBox bgColor="dark">dark</ColorBox>\n<Spacer />\n<ColorBox bgColor="darker">darker</ColorBox>\n<Spacer />\n<ColorBox bgColor="darkest">darkest</ColorBox>',__scope:{props:this?this.props:o,ColorBox:c.a,Spacer:s.c}},a.a.createElement(c.a,{bgColor:"primary"},"primary"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"washedPrimary"},"washedPrimary"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"danger"},"danger"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"washedDanger"},"washedDanger"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"success"},"success"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"washedSuccess"},"washedSuccess"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"warning"},"warning"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"washedWarning"},"washedWarning"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"transparent"},"transparent"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"inherit"},"inherit"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"white"},"white"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"lightest"},"lightest"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"lighter"},"lighter"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"light"},"light"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"normal"},"normal"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"dark"},"dark"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"darker"},"darker"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"darkest"},"darkest")),a.a.createElement(t.MDXTag,{name:"h3",components:r,props:{id:"colorbox-borders"}},"ColorBox borders"),a.a.createElement(l.e,{__position:2,__code:'<ColorBox className="border" borderColor="primary">\n  primary\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="danger">\n  danger\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="success">\n  success\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="warning">\n  warning\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="transparent">\n  transparent\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="white">\n  white\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="light">\n  light\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="normal">\n  normal\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="dark">\n  dark\n</ColorBox>',__scope:{props:this?this.props:o,ColorBox:c.a,Spacer:s.c}},a.a.createElement(c.a,{className:"border",borderColor:"primary"},"primary"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"danger"},"danger"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"success"},"success"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"warning"},"warning"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"transparent"},"transparent"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"white"},"white"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"light"},"light"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"normal"},"normal"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"dark"},"dark")))}}])&&m(o.prototype,n),i&&m(o,i),r}();C.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-color-box-color-box.f71e593218f71150a2cc.js.map