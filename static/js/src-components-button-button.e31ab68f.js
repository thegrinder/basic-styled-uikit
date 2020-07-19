(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docz/index.js":function(e,n,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),o=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");function i(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return i=function(){return e},e}var a=o.d.div(i()),c=a;function s(){var e=Object(r.a)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  background-color: #222;\n  display: inline-block;\n  margin: 0 16px;\n"]);return s=function(){return e},e}"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacer",filename:"docz/Spacer.js"}});var p=o.d.span(s()),u=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"docz/Icon.js"}});var b=t("./node_modules/prop-types/index.js");function d(){var e=Object(r.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  border: 2px solid ",";\n  border-bottom-color: transparent;\n  animation: "," 0.75s 0s infinite linear;\n  vertical-align: middle;\n  display: inline-block;\n"]);return d=function(){return e},e}function l(){var e=Object(r.a)(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n"]);return l=function(){return e},e}var m=Object(o.e)(l()),f={color:b.string},j=o.d.span(d(),function(e){return e.color},m);j.propTypes=f,j.defaultProps={color:"#fff"};var y=j;function O(){var e=Object(r.a)(["\n  max-width: ","px;\n"]);return O=function(){return e},e}"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spinner",filename:"docz/Spinner.js"}});var g={maxWidth:b.number},_=o.d.div(O(),function(e){return e.maxWidth});_.propTypes=g,_.defaultProps={maxWidth:300};var x=_;"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InputWrapper",filename:"docz/InputWrapper.js"}}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return u}),t.d(n,"d",function(){return y}),t.d(n,"b",function(){return x}),"undefined"!==typeof Spacer&&Spacer&&Spacer===Object(Spacer)&&Object.isExtensible(Spacer)&&Object.defineProperty(Spacer,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacer",filename:"docz/index.js"}}),"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"docz/index.js"}}),"undefined"!==typeof Spinner&&Spinner&&Spinner===Object(Spinner)&&Object.isExtensible(Spinner)&&Object.defineProperty(Spinner,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spinner",filename:"docz/index.js"}}),"undefined"!==typeof InputWrapper&&InputWrapper&&InputWrapper===Object(InputWrapper)&&Object.isExtensible(InputWrapper)&&Object.defineProperty(InputWrapper,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InputWrapper",filename:"docz/index.js"}})},"./src/components/Button/button.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),a=t.n(i),c=t("./node_modules/@mdx-js/react/dist/index.es.js"),s=t("./node_modules/docz/dist/index.esm.js"),p=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),u=t("./node_modules/prop-types/index.js"),b=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");function d(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  opacity: ",";\n"]);return d=function(){return e},e}var l={submitting:u.bool.isRequired},m=b.d.span(d(),function(e){return e.submitting?"0":"1"});m.propTypes=l;var f=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContentWrapper",filename:"src/components/Button/ContentWrapper.js"}});var j=t("./src/theme/typography.js"),y=t("./src/theme/themeSelectors.js"),O=function(e,n,t){var r=Object(y.a)(e).btnTypes[n];return r&&r[t]?r[t]:{}};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getBtnTypeStyle",filename:"src/components/Button/buttonSelectors.js"}});var g=function(e,n){return Object(y.a)(e).sizings[n]||{}};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getBtnSizingStyle",filename:"src/components/Button/buttonSelectors.js"}});var _=function(e){return Object(y.a)(e).common};function x(){var e=Object(p.a)(["\n    ","\n    ","\n    ","\n    &:hover,\n    &:focus {\n      ","\n    }\n    &:active {\n      ","\n    }\n    &:disabled {\n      ","\n    }\n  "]);return x=function(){return e},e}function v(){var e=Object(p.a)(["\n  border: none;\n  overflow: visible;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  text-decoration: none;\n  transition: .1s ease-in-out;\n  transition-property: color, background-color, border-color;\n  cursor: pointer;\n  outline: none;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: ",";\n  &:disabled {\n    opacity: .6;\n    cursor: default;\n  }\n  ","\n"]);return v=function(){return e},e}_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getBtnCommonStyle",filename:"src/components/Button/buttonSelectors.js"}});var S={btntype:u.string.isRequired,sizing:u.string.isRequired},B=b.d.button(v(),Object(j.d)(6),function(e){var n=e.theme,t=e.btntype,r=e.sizing;return Object(b.c)(x(),_(n),g(n,r),O(n,t,"normal"),O(n,t,"hover"),O(n,t,"active"),O(n,t,"normal"))});B.propTypes=S;var h=B;function P(){var e=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return P=function(){return e},e}"undefined"!==typeof B&&B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StyledButton",filename:"src/components/Button/StyledButton.js"}});var T=b.d.span(P()),z=T;"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpinnerWrapper",filename:"src/components/Button/SpinnerWrapper.js"}});var I=function(e){var n=e.btnType,t=e.sizing,i=e.submitting,c=e.renderSpinner,s=e.children,p=e.as,u=Object(o.a)(e,["btnType","sizing","submitting","renderSpinner","children","as"]);return a.a.createElement(h,Object(r.a)({as:p,sizing:t,btntype:n},u),i&&a.a.createElement(z,null,c),a.a.createElement(f,{submitting:i},s))};I.defaultProps={sizing:"m",btnType:"default",submitting:!1,as:"button"};var E=I;I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.js"}});var W=t("./docz/index.js");t.d(n,"default",function(){return L});var w={},k="wrapper";function L(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)(k,Object(r.a)({},w,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"button"},"Button"),Object(c.b)(s.d,{of:E,mdxType:"Props"}),Object(c.b)("h3",{id:"button-types"},"Button types"),Object(c.b)(s.c,{__position:1,__code:'<Button className="mb">default</Button>\n<Spacer />\n<Button btnType="primary">primary</Button>\n<Spacer />\n<Button btnType="danger">danger</Button>',__scope:{props:this?this.props:t,Playground:s.c,Props:s.d,Button:E,Spacer:W.c,Spinner:W.d,Icon:W.a},mdxType:"Playground"},Object(c.b)(E,{className:"mb",mdxType:"Button"},"default"),Object(c.b)(W.c,{mdxType:"Spacer"}),Object(c.b)(E,{btnType:"primary",mdxType:"Button"},"primary"),Object(c.b)(W.c,{mdxType:"Spacer"}),Object(c.b)(E,{btnType:"danger",mdxType:"Button"},"danger")),Object(c.b)("h3",{id:"button-sizes"},"Button sizes"),Object(c.b)(s.c,{__position:2,__code:'<Button sizing="s">small</Button>\n<Spacer />\n<Button sizing="m">medium</Button>\n<Spacer />\n<Button sizing="l">large</Button>',__scope:{props:this?this.props:t,Playground:s.c,Props:s.d,Button:E,Spacer:W.c,Spinner:W.d,Icon:W.a},mdxType:"Playground"},Object(c.b)(E,{sizing:"s",mdxType:"Button"},"small"),Object(c.b)(W.c,{mdxType:"Spacer"}),Object(c.b)(E,{sizing:"m",mdxType:"Button"},"medium"),Object(c.b)(W.c,{mdxType:"Spacer"}),Object(c.b)(E,{sizing:"l",mdxType:"Button"},"large")),Object(c.b)("h3",{id:"disabled-button"},"Disabled button"),Object(c.b)(s.c,{__position:3,__code:"<Button disabled={true}>disabled</Button>",__scope:{props:this?this.props:t,Playground:s.c,Props:s.d,Button:E,Spacer:W.c,Spinner:W.d,Icon:W.a},mdxType:"Playground"},Object(c.b)(E,{disabled:!0,mdxType:"Button"},"disabled")),Object(c.b)("h3",{id:"disabled-button-with-a-spinner"},"Disabled Button with a spinner"),Object(c.b)(s.c,{__position:4,__code:"<Button disabled={true} submitting={true} renderSpinner={<Spinner />}>\n  submitting\n</Button>",__scope:{props:this?this.props:t,Playground:s.c,Props:s.d,Button:E,Spacer:W.c,Spinner:W.d,Icon:W.a},mdxType:"Playground"},Object(c.b)(E,{disabled:!0,submitting:!0,renderSpinner:Object(c.b)(W.d,{mdxType:"Spinner"}),mdxType:"Button"},"submitting")),Object(c.b)("h3",{id:"button-as-link"},"Button as Link"),Object(c.b)(s.c,{__position:5,__code:'<Button as="a">Link</Button>',__scope:{props:this?this.props:t,Playground:s.c,Props:s.d,Button:E,Spacer:W.c,Spinner:W.d,Icon:W.a},mdxType:"Playground"},Object(c.b)(E,{as:"a",mdxType:"Button"},"Link")))}L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Button/button.mdx"}}),L.isMDXComponent=!0}}]);
//# sourceMappingURL=src-components-button-button.396b50c7474f28964904.js.map