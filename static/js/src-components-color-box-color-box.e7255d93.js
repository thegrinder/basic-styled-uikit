(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docz/index.js":function(e,o,r){"use strict";var n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n.d.div.withConfig({displayName:"Spacer",componentId:"sc-15p8eqj-0"})(["margin-bottom:16px;"]),t=n.d.span.withConfig({displayName:"Icon",componentId:"sc-1kriy8w-0"})(["width:10px;height:10px;border-radius:5px;background-color:#222;display:inline-block;margin:0 16px;"]),l=r("./node_modules/prop-types/index.js"),c=Object(n.e)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),s={color:l.string},i=n.d.span.withConfig({displayName:"Spinner",componentId:"sc-1d0xwhq-0"})(["width:20px;height:20px;border-radius:100%;border:2px solid ",";border-bottom-color:transparent;animation:"," 0.75s 0s infinite linear;vertical-align:middle;display:inline-block;"],function(e){return e.color},c);i.propTypes=s,i.defaultProps={color:"#fff"};var d=i,m={maxWidth:l.number},p=n.d.div.withConfig({displayName:"InputWrapper",componentId:"wxf916-0"})(["max-width:","px;"],function(e){return e.maxWidth});p.propTypes=m,p.defaultProps={maxWidth:300};var u=p;r.d(o,"c",function(){return a}),r.d(o,"a",function(){return t}),r.d(o,"d",function(){return d}),r.d(o,"b",function(){return u})},"./src/components/ColorBox/ColorBox.mdx":function(e,o,r){"use strict";r.r(o),r.d(o,"default",function(){return C});var n=r("./node_modules/react/index.js"),a=r.n(n),t=r("./node_modules/@mdx-js/tag/dist/index.js"),l=r("./node_modules/docz/dist/index.m.js"),c=r("./src/components/ColorBox/ColorBox.js"),s=r("./docz/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,o){if(null==e)return{};var r,n,a=function(e,o){if(null==e)return{};var r,n,a={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e,o){for(var r=0;r<o.length;r++){var n=o[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,o){return!o||"object"!==i(o)&&"function"!==typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,o){return(b=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}var C=function(e){function o(e){var r;return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),(r=p(this,u(o).call(this,e))).layout=null,r}var r,n,i;return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&b(e,o)}(o,a.a.Component),r=o,(n=[{key:"render",value:function(){var e=this.props,o=e.components,r=d(e,["components"]);return a.a.createElement(t.MDXTag,{name:"wrapper",components:o},a.a.createElement(t.MDXTag,{name:"h1",components:o,props:{id:"colorbox"}},"ColorBox"),a.a.createElement(l.f,{of:c.a}),a.a.createElement(t.MDXTag,{name:"h3",components:o,props:{id:"colorbox-backgrounds"}},"ColorBox backgrounds"),a.a.createElement(l.e,{__position:1,__code:'<ColorBox bgColor="primary">primary</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedPrimary">washedPrimary</ColorBox>\n<Spacer />\n<ColorBox bgColor="danger">danger</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedDanger">washedDanger</ColorBox>\n<Spacer />\n<ColorBox bgColor="success">success</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedSuccess">washedSuccess</ColorBox>\n<Spacer />\n<ColorBox bgColor="warning">warning</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedWarning">washedWarning</ColorBox>\n<Spacer />\n<ColorBox bgColor="transparent">transparent</ColorBox>\n<Spacer />\n<ColorBox bgColor="inherit">inherit</ColorBox>\n<Spacer />\n<ColorBox bgColor="white">white</ColorBox>\n<Spacer />\n<ColorBox bgColor="lightest">lightest</ColorBox>\n<Spacer />\n<ColorBox bgColor="lighter">lighter</ColorBox>\n<Spacer />\n<ColorBox bgColor="light">light</ColorBox>\n<Spacer />\n<ColorBox bgColor="normal">normal</ColorBox>\n<Spacer />\n<ColorBox bgColor="dark">dark</ColorBox>\n<Spacer />\n<ColorBox bgColor="darker">darker</ColorBox>\n<Spacer />\n<ColorBox bgColor="darkest">darkest</ColorBox>',__scope:{props:this?this.props:r,ColorBox:c.a,Spacer:s.c}},a.a.createElement(c.a,{bgColor:"primary"},"primary"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"washedPrimary"},"washedPrimary"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"danger"},"danger"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"washedDanger"},"washedDanger"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"success"},"success"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"washedSuccess"},"washedSuccess"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"warning"},"warning"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"washedWarning"},"washedWarning"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"transparent"},"transparent"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"inherit"},"inherit"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"white"},"white"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"lightest"},"lightest"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"lighter"},"lighter"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"light"},"light"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"normal"},"normal"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"dark"},"dark"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"darker"},"darker"),a.a.createElement(s.c,null),a.a.createElement(c.a,{bgColor:"darkest"},"darkest")),a.a.createElement(t.MDXTag,{name:"h3",components:o,props:{id:"colorbox-borders"}},"ColorBox borders"),a.a.createElement(l.e,{__position:2,__code:'<ColorBox className="border" borderColor="primary">\n  primary\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="danger">\n  danger\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="success">\n  success\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="warning">\n  warning\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="transparent">\n  transparent\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="white">\n  white\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="light">\n  light\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="normal">\n  normal\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="dark">\n  dark\n</ColorBox>',__scope:{props:this?this.props:r,ColorBox:c.a,Spacer:s.c}},a.a.createElement(c.a,{className:"border",borderColor:"primary"},"primary"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"danger"},"danger"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"success"},"success"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"warning"},"warning"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"transparent"},"transparent"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"white"},"white"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"light"},"light"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"normal"},"normal"),a.a.createElement(s.c,null),a.a.createElement(c.a,{className:"border",borderColor:"dark"},"dark")))}}])&&m(r.prototype,n),i&&m(r,i),o}();C.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-color-box-color-box.2abb9486c3d86a85fa91.js.map