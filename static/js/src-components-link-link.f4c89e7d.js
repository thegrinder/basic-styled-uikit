(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./docz/index.js":function(e,n,t){"use strict";var o=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o.d.div.withConfig({displayName:"Spacer",componentId:"sc-15p8eqj-0"})(["margin-bottom:16px;"]),i=o.d.span.withConfig({displayName:"Icon",componentId:"sc-1kriy8w-0"})(["width:10px;height:10px;border-radius:5px;background-color:#222;display:inline-block;margin:0 16px;"]),a=t("./node_modules/prop-types/index.js"),s=Object(o.e)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),c={color:a.string},p=o.d.span.withConfig({displayName:"Spinner",componentId:"sc-1d0xwhq-0"})(["width:20px;height:20px;border-radius:100%;border:2px solid ",";border-bottom-color:transparent;animation:"," 0.75s 0s infinite linear;vertical-align:middle;display:inline-block;"],function(e){return e.color},s);p.propTypes=c,p.defaultProps={color:"#fff"};var l=p,u={maxWidth:a.number},d=o.d.div.withConfig({displayName:"InputWrapper",componentId:"wxf916-0"})(["max-width:","px;"],function(e){return e.maxWidth});d.propTypes=u,d.defaultProps={maxWidth:300};var m=d;t.d(n,"c",function(){return r}),t.d(n,"a",function(){return i}),t.d(n,"d",function(){return l}),t.d(n,"b",function(){return m})},"./src/components/Link/Link.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return y});var o=t("./node_modules/react/index.js"),r=t.n(o),i=t("./node_modules/@mdx-js/tag/dist/index.js"),a=t("./node_modules/docz/dist/index.m.js"),s=t("./src/components/Link/Link.js"),c=t("./docz/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function u(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var y=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=d(this,m(n).call(this,e))).layout=null,t}var t,o,p;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=l(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:n},r.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"link"}},"Link"),r.a.createElement(a.f,{of:s.a}),r.a.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"link-types"}},"Link types"),r.a.createElement(a.e,{__position:1,__code:'<Link href="#" linkType="default">\n  default link\n</Link>\n<Spacer />\n<Link href="#" linkType="muted">\n  muted link\n</Link>',__scope:{props:this?this.props:t,Link:s.a,Spacer:c.c}},r.a.createElement(s.a,{href:"#",linkType:"default"},"default link"),r.a.createElement(c.c,null),r.a.createElement(s.a,{href:"#",linkType:"muted"},"muted link")),r.a.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"link-sizes"}},"Link sizes"),r.a.createElement(a.e,{__position:2,__code:'<Link sizing="l">large</Link>\n<Spacer />\n<Link sizing="m">medium</Link>\n<Spacer />\n<Link sizing="s">small</Link>\n<Spacer />\n<Link sizing="xs">extra small</Link>',__scope:{props:this?this.props:t,Link:s.a,Spacer:c.c}},r.a.createElement(s.a,{sizing:"l"},"large"),r.a.createElement(c.c,null),r.a.createElement(s.a,{sizing:"m"},"medium"),r.a.createElement(c.c,null),r.a.createElement(s.a,{sizing:"s"},"small"),r.a.createElement(c.c,null),r.a.createElement(s.a,{sizing:"xs"},"extra small")),r.a.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"link-as-button"}},"Link as button"),r.a.createElement(a.e,{__position:3,__code:'<Link href="#" as="button">\n  button link\n</Link>',__scope:{props:this?this.props:t,Link:s.a,Spacer:c.c}},r.a.createElement(s.a,{href:"#",as:"button"},"button link")))}}])&&u(t.prototype,o),p&&u(t,p),n}();y.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-link-link.d6aac223e1ada49c987a.js.map