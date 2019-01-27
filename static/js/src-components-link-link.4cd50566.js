(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./docz/index.js":function(e,n,t){"use strict";var o=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o.c.div.withConfig({displayName:"Spacer",componentId:"sc-15p8eqj-0"})(["margin-bottom:16px;"]),i=o.c.span.withConfig({displayName:"Icon",componentId:"sc-1kriy8w-0"})(["width:10px;height:10px;border-radius:5px;background-color:#222;display:inline-block;margin:0 16px;"]),a=t("./node_modules/prop-types/index.js"),s=Object(o.d)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),c={color:a.string},l=o.c.span.withConfig({displayName:"Spinner",componentId:"sc-1d0xwhq-0"})(["width:20px;height:20px;border-radius:100%;border:2px solid ",";border-bottom-color:transparent;animation:"," 0.75s 0s infinite linear;vertical-align:middle;display:inline-block;"],function(e){return e.color},s);l.propTypes=c,l.defaultProps={color:"#fff"};var u=l,p={maxWidth:a.number},d=o.c.div.withConfig({displayName:"InputWrapper",componentId:"wxf916-0"})(["max-width:","px;"],function(e){return e.maxWidth});d.propTypes=p,d.defaultProps={maxWidth:300};var m=d;t.d(n,"c",function(){return r}),t.d(n,"a",function(){return i}),t.d(n,"d",function(){return u}),t.d(n,"b",function(){return m})},"./src/components/Link/Link.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),i=t("./node_modules/@mdx-js/tag/dist/index.js"),a=t("./node_modules/docz/dist/index.m.js"),s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=t("./node_modules/prop-types/index.js"),l=t("./src/components/Text/textHelpers.js"),u=t("./src/helpers/utils.js"),p=function(e,n){var t=e.theme,o=e.linktype;return t.uiKit.link.linkTypes[o][n]},d=function(e){return Object(u.b)(p,e)},m=d("normal"),f=d("hover"),b=Object(u.b)(function(e){return e.theme.uiKit.link.common}),y={sizing:c.string.isRequired,linktype:c.string.isRequired,as:Object(c.oneOfType)([Object(c.oneOf)(["a","button"]),c.func]).isRequired},g=s.c.a.withConfig({displayName:"StyledLink",componentId:"sc-1s1vukk-0"})(["margin:0;padding:0;background-color:transparent;border:none;overflow:visible;box-sizing:border-box;display:inline-block;vertical-align:middle;outline:none;cursor:pointer;touch-action:manipulation;text-decoration:none;font-family:inherit;margin-bottom:0;"," "," "," &:hover{"," outline:none;text-decoration:underline;}"],b,l.d,m,f);g.propTypes=y;var k=g;function h(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var v=function(e){var n=e.sizing,t=e.linkType,o=e.as,i=h(e,["sizing","linkType","as"]);return r.a.createElement(k,Object.assign({sizing:n,linktype:t,as:o},i))};v.defaultProps={sizing:"m",linkType:"default",as:"a"};var x=v;v.__docgenInfo={description:"",methods:[],displayName:"Link",props:{sizing:{defaultValue:{value:"'m'",computed:!1},type:{name:"string"},required:!1,description:"one of: s, m, l"},linkType:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:"one of: default, muted"},as:{defaultValue:{value:"'a'",computed:!1},type:{name:"union",value:[{name:"enum",value:[{value:"'a'",computed:!1},{value:"'button'",computed:!1}]},{name:"func"}]},required:!1,description:"rendered html tag or custom router link component"}}};var j=t("./docz/index.js");function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function w(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,n){return!n||"object"!==_(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,n){return(z=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"default",function(){return T});var T=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=E(this,L(n).call(this,e))).layout=null,t}var t,o,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&z(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=O(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:n},r.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"link"}},"Link"),r.a.createElement(a.f,{of:x}),r.a.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"link-types"}},"Link types"),r.a.createElement(a.e,{__position:1,__code:'<Link href="#" linkType="default">\n  default link\n</Link>\n<Spacer />\n<Link href="#" linkType="muted">\n  muted link\n</Link>',__scope:{props:this?this.props:t,Link:x,Spacer:j.c}},r.a.createElement(x,{href:"#",linkType:"default"},"default link"),r.a.createElement(j.c,null),r.a.createElement(x,{href:"#",linkType:"muted"},"muted link")),r.a.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"link-sizes"}},"Link sizes"),r.a.createElement(a.e,{__position:2,__code:'<Link sizing="l">large</Link>\n<Spacer />\n<Link sizing="m">medium</Link>\n<Spacer />\n<Link sizing="s">small</Link>\n<Spacer />\n<Link sizing="xs">extra small</Link>',__scope:{props:this?this.props:t,Link:x,Spacer:j.c}},r.a.createElement(x,{sizing:"l"},"large"),r.a.createElement(j.c,null),r.a.createElement(x,{sizing:"m"},"medium"),r.a.createElement(j.c,null),r.a.createElement(x,{sizing:"s"},"small"),r.a.createElement(j.c,null),r.a.createElement(x,{sizing:"xs"},"extra small")),r.a.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"link-as-button"}},"Link as button"),r.a.createElement(a.e,{__position:3,__code:'<Link href="#" as="button">\n  button link\n</Link>',__scope:{props:this?this.props:t,Link:x,Spacer:j.c}},r.a.createElement(x,{href:"#",as:"button"},"button link")))}}])&&w(t.prototype,o),s&&w(t,s),n}();T.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/components/Text/textHelpers.js":function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"d",function(){return a}),t.d(n,"b",function(){return s}),t.d(n,"c",function(){return c});var o=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./src/helpers/utils.js"),i=function(e){var n=e.theme,t=e.sizing;return n.uiKit.text.sizings[t]},a=Object(r.b)(i),s=function(e){var n=e.theme,t=e.color;return Object(o.b)(["color:",";"],function(e,n){return e.uiKit.text.colors[n]}(n,t))},c=Object(r.b)(function(e){return e.theme.uiKit.text.common})}}]);
//# sourceMappingURL=src-components-link-link.ae15779c82c3cadcc568.js.map