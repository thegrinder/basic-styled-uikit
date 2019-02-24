(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docz/index.js":function(e,t,n){"use strict";var o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o.d.div.withConfig({displayName:"Spacer",componentId:"sc-15p8eqj-0"})(["margin-bottom:16px;"]),a=o.d.span.withConfig({displayName:"Icon",componentId:"sc-1kriy8w-0"})(["width:10px;height:10px;border-radius:5px;background-color:#222;display:inline-block;margin:0 16px;"]),i=n("./node_modules/prop-types/index.js"),c=Object(o.e)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),s={color:i.string},p=o.d.span.withConfig({displayName:"Spinner",componentId:"sc-1d0xwhq-0"})(["width:20px;height:20px;border-radius:100%;border:2px solid ",";border-bottom-color:transparent;animation:"," 0.75s 0s infinite linear;vertical-align:middle;display:inline-block;"],function(e){return e.color},c);p.propTypes=s,p.defaultProps={color:"#fff"};var u=p,l={maxWidth:i.number},d=o.d.div.withConfig({displayName:"InputWrapper",componentId:"wxf916-0"})(["max-width:","px;"],function(e){return e.maxWidth});d.propTypes=l,d.defaultProps={maxWidth:300};var m=d;n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return m})},"./src/components/Button/Button.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),c=n("./src/components/Button/Button.js"),s=n("./docz/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,m(t).call(this,e))).layout=null,n}var n,o,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=u(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"button"}},"Button"),r.a.createElement(i.f,{of:c.a}),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"button-types"}},"Button types"),r.a.createElement(i.e,{__position:1,__code:'<Button className="mb">default</Button>\n<Spacer />\n<Button btnType="primary">primary</Button>\n<Spacer />\n<Button btnType="danger">danger</Button>',__scope:{props:this?this.props:n,Button:c.a,Spacer:s.c,Spinner:s.d,Icon:s.a}},r.a.createElement(c.a,{className:"mb"},"default"),r.a.createElement(s.c,null),r.a.createElement(c.a,{btnType:"primary"},"primary"),r.a.createElement(s.c,null),r.a.createElement(c.a,{btnType:"danger"},"danger")),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"button-sizes"}},"Button sizes"),r.a.createElement(i.e,{__position:2,__code:'<Button sizing="s">small</Button>\n<Spacer />\n<Button sizing="m">medium</Button>\n<Spacer />\n<Button sizing="l">large</Button>',__scope:{props:this?this.props:n,Button:c.a,Spacer:s.c,Spinner:s.d,Icon:s.a}},r.a.createElement(c.a,{sizing:"s"},"small"),r.a.createElement(s.c,null),r.a.createElement(c.a,{sizing:"m"},"medium"),r.a.createElement(s.c,null),r.a.createElement(c.a,{sizing:"l"},"large")),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"disabled-button"}},"Disabled button"),r.a.createElement(i.e,{__position:3,__code:"<Button disabled={true}>disabled</Button>",__scope:{props:this?this.props:n,Button:c.a,Spacer:s.c,Spinner:s.d,Icon:s.a}},r.a.createElement(c.a,{disabled:!0},"disabled")),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"disabled-button-with-a-spinner"}},"Disabled Button with a spinner"),r.a.createElement(i.e,{__position:4,__code:"<Button disabled={true} submitting={true} renderSpinner={<Spinner />}>\n  submitting\n</Button>",__scope:{props:this?this.props:n,Button:c.a,Spacer:s.c,Spinner:s.d,Icon:s.a}},r.a.createElement(c.a,{disabled:!0,submitting:!0,renderSpinner:r.a.createElement(s.d,null)},"submitting")),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"button-with-icon"}},"Button with icon"),r.a.createElement(i.e,{__position:5,__code:"<Button left={<Icon />}>left icon</Button>\n<Spacer />\n<Button right={<Icon />}>right icon</Button>",__scope:{props:this?this.props:n,Button:c.a,Spacer:s.c,Spinner:s.d,Icon:s.a}},r.a.createElement(c.a,{left:r.a.createElement(s.a,null)},"left icon"),r.a.createElement(s.c,null),r.a.createElement(c.a,{right:r.a.createElement(s.a,null)},"right icon")),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"button-as-link"}},"Button as Link"),r.a.createElement(i.e,{__position:6,__code:'<Button as="a">Link</Button>',__scope:{props:this?this.props:n,Button:c.a,Spacer:s.c,Spinner:s.d,Icon:s.a}},r.a.createElement(c.a,{as:"a"},"Link")))}}])&&l(n.prototype,o),p&&l(n,p),t}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-button-button.3b28fe445a9b5e5035f3.js.map