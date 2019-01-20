(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docz/index.js":function(o,e,r){"use strict";var n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n.c.div.withConfig({displayName:"Spacer",componentId:"sc-15p8eqj-0"})(["margin-bottom:16px;"]),t=n.c.span.withConfig({displayName:"Icon",componentId:"sc-1kriy8w-0"})(["width:10px;height:10px;border-radius:5px;background-color:#222;display:inline-block;margin:0 16px;"]),l=r("./node_modules/prop-types/index.js"),c=Object(n.d)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),A={color:l.string},s=n.c.span.withConfig({displayName:"Spinner",componentId:"sc-1d0xwhq-0"})(["width:20px;height:20px;border-radius:100%;border:2px solid ",";border-bottom-color:transparent;animation:"," 0.75s 0s infinite linear;vertical-align:middle;display:inline-block;"],function(o){return o.color},c);s.propTypes=A,s.defaultProps={color:"#fff"};var i=s,g={maxWidth:l.number},d=n.c.div.withConfig({displayName:"InputWrapper",componentId:"wxf916-0"})(["max-width:","px;"],function(o){return o.maxWidth});d.propTypes=g,d.defaultProps={maxWidth:300};var m=d;r.d(e,"c",function(){return a}),r.d(e,"a",function(){return t}),r.d(e,"d",function(){return i}),r.d(e,"b",function(){return m})},"./src/components/ColorBox/ColorBox.js":function(o,e,r){"use strict";var n=r("./node_modules/react/index.js"),a=r.n(n),t=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=r("./node_modules/prop-types/index.js"),c=function(o,e){return o.uiKit.colorBox.bgColors[e]},A={bgColor:l.string,borderColor:l.string},s=t.c.div.withConfig({displayName:"ColorBox__StyledColorBox",componentId:"sc-105jy39-0"})(["box-sizing:border-box;"," ",""],function(o){var e=o.theme,r=o.bgColor;return c(e,r)?Object(t.b)(["background-color:",";"],c(e,r)):""},function(o){var e=function(o,e){return o.uiKit.colorBox.borderColors[e]}(o.theme,o.borderColor);return e?Object(t.b)(["border-color:",";"],e):""});s.propTypes=A;var i=function(o){return a.a.createElement(s,o)};e.a=i;i.__docgenInfo={description:"",methods:[],displayName:"ColorBox",props:{bgColor:{type:{name:"string"},required:!1,description:"one of: transparent, inherit, white, lightest, lighter, light, normal, dark, darker, darkest,\nwashedPrimary, primary, washedSuccess, success, washedDanger, danger, washedWarning, warning"},borderColor:{type:{name:"string"},required:!1,description:"one of: transparent, white, light, normal, dark, primary, success, warning, danger"}}}},"./src/components/ColorBox/ColorBox.mdx":function(o,e,r){"use strict";r.r(e),r.d(e,"default",function(){return C});var n=r("./node_modules/react/index.js"),a=r.n(n),t=r("./node_modules/@mdx-js/tag/dist/index.js"),l=r("./node_modules/docz/dist/index.m.js"),c=r("./src/components/ColorBox/ColorBox.js"),A=r("./docz/index.js");function s(o){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"===typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function i(o,e){if(null==o)return{};var r,n,a=function(o,e){if(null==o)return{};var r,n,a={},t=Object.keys(o);for(n=0;n<t.length;n++)r=t[n],e.indexOf(r)>=0||(a[r]=o[r]);return a}(o,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);for(n=0;n<t.length;n++)r=t[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(o,r)&&(a[r]=o[r])}return a}function g(o,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function d(o,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}(o):e}function m(o){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function B(o,e){return(B=Object.setPrototypeOf||function(o,e){return o.__proto__=e,o})(o,e)}var C=function(o){function e(o){var r;return function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=d(this,m(e).call(this,o))).layout=null,r}var r,n,s;return function(o,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),e&&B(o,e)}(e,a.a.Component),r=e,(n=[{key:"render",value:function(){var o=this.props,e=o.components,r=i(o,["components"]);return a.a.createElement(t.MDXTag,{name:"wrapper",components:e},a.a.createElement(t.MDXTag,{name:"h1",components:e,props:{id:"colorbox"}},"ColorBox"),a.a.createElement(l.f,{of:c.a}),a.a.createElement(t.MDXTag,{name:"h3",components:e,props:{id:"colorbox-backgrounds"}},"ColorBox backgrounds"),a.a.createElement(l.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZHCgYUb28N0TXaT04AEchASdah9DgSRoNg7wcMoGCBDgrB_QFe0pmAdhnBmSUMnYeQELlJDpFOAAvMjIPYIMpSY00tXaO0NXYKjNB8RjjWYgABGAiBEAZUHQrpBIDVBdFRY52OcAhEmxdhuBE9YogEZ5UCudoAAZ2GTGZSP3GtaK7ApzIAFls9gADZbPaeyLDAECADEfWgRJzP4ZxDkRR1MHYAAFIR-CWOSfjgWjER89Z_JoZwIDYy52AARhc-z5HBNTqA0gBBOZ9PYSMqPIGwoHQcMGM5fSxDqmMZHYVFdJgbhgEPNjtP6uB5G3WtgEa6AWuCAAyebxkSeZKGaGbmta7htvlMBQjUntUHadgAH4Nlm8NI3aq4Nrm1BSprKQZGrd8zFhYTMDAMIoCmK6Oq6x7qpXGtEx4ggcACzIUmvAhJtrNdCLwnwPBSXCBD4EABwFVwBEScQseMxIpDRki4drRgaLoo4t1XRMSfglG0YxkZ_E2dB4ux3HxBZuA2Y5wnicR4jvDJxNKcRanRYRoiSPYRmhYx9B3DSARxCV2cMkFmWRdputxfommQfJ-nkdRhX-B5tntWVsEQDES3smtjWBC1pGpYptKDfdk25bNoiMYZchETgOBxED4O4Fd4WsHd_XJd1xgffl_2LdZ7JnFCIP4FDu2HfQDOs5DqPSYTuP2EN-G6aF2Xk-FZmcdQApuYbgpi51o2xc9-OO-lpHfaZ1PeeyAB1FvZ2bof0FHgRG9nNuY9Lrvy-96uGb9uv-DRdxUpx_RxC31Ad_DAh59jpeK8rxPV9NgeVFQTZ-lEO20Afl5T8Xqnl4TpP1_Ri2bFoNzABMB349w9p_C-8Mr7axvubEAUAIApEIPAJ-YgEFINoKiUBlc9bnxXjA_ucD0HINVnbYhtAXYERgWfCB-C-61z_vAxBhBxDkOwZfMukDjbX0ISnEAPwBBRCgOIARQj2FQM4XQ6OvCN4gCVgIbYascbbHEeTSR38eEMMVso22Yh5HbE1lQt2H8JZfzAT_W--iUFKIUSg1RUgwYQyhjDSaUggYvTMN-EAKE0KfA3DQbCJsjHRwAloCgIF9AMHIsJPqsAciSXlLE7IFo_GYQCZxCiIlepogKAxPi7QByUBmBaHS8w4AZOEg1a-N4UijVgEsKgMC4ICGnHU7oEl3QsUaUjAAEguOE5TVSqXUlMQpMxLArXgLVYA6wGFXFRDOFIvk5bCmnGjeZOTZwlSGWYEZjoCEGSSegHAMhijrAACTTWqbUnSsAHoWEud06OzTWm3JgA9YoOzUAmxwGMiZZTap_MmXAL570HSfW-lBa-QyvHDUkKobAoSgK6FAgYcCYKphlwSSxOO_oMWNF0Pkz0DRdB4qwJkmiaAXRHGxZ6SlqBqVksyQ0VAMxwjD0yHMeitLJAsrZQQDlsw4T-i8T49CGYsLBJIuhGBfSoADKRdoFFkTwLRIdA1EOeTsVHJSRhTMBBBllXxXss8JEalo1qpGCYskYBLAYe1bgnVow1mtceHAoQIAAGkXgfGvjgBhcAADaDCAC6ZhPxvXJcJPZTyzU3P6paqirrbUyKOPIB1nUZk1j2dUc1Qtaqmu8HmoiVrNjHjtb_CNNYugED6OYXNv9VxnTOHAYoHhJTbBSEIfa6BdVESuJcwtWBi3ClLTaitaNOTyGVGco25l_TTqNVGh0JqxxmtWRkC1Bkx3lpWS0zdQsM0AwsMm91XqfWxu8P6jdAg0ZBq8Pu29Qsw0fiGcaiqUxL3DpvW0xNBJx17rWfm9N_0s0WBzUWm9W7RwEHXY-tGO6U0PqA0RKtFga11pWd--DQsm09BDm2m9fbhQDuALmqDQtp2zvhvOoZi7UCwvYpIOOirwl6DAhBTJRz8k6tSfqw1wyP3USXoct5xzTlGRxqZC0XgbiRCuAVLyWAhmfKXZkiFoQfrCapjCpQcimMkuoKx4C7G0WcZiWJnjYndUSvSV8vZhnzCif6scneqBqP5i4BMBTFlbJDIsJsZhBAfN-dmURzILA8hXAAKyhZrO2nYXa2gYGI-WdgABiAATNl_zxxbDklcKFTgqAEEuhkzBHYuXjKmSuFZRTcXVOqXxRprTjndPKDhfS6lxnlUcbVVMI5SwqIGMSDKH0UyOmIV43qrC_pdlCZgp2XJBkRtjePK29YFkACkWSD5wH8oIq4QgCBZEjBZTAKRPwMXWAVCy23duZEPgdogR2RCneTB5c7MBLvKmu-5-zQmuv0Wc3EnAbmPO4nQN59gmXfPKfWIFjBVxYdxYsMhjIFoIsQCi4VO7W3cvo7S5l9ycBCJcAy2ASnBOiOyYiEQVLVw9u0WPrl9w2NDqkcWywWcjELI4AAOzRbsBZOwaBICN1oOwUrEoBC5dYBkGIcQoAWniIgsy7AiBcHQLAXLLBUpQEK1cNA0vyunG2Cp0Fy6pgtcxTMKlGR2v6fIGxXlrL2WcrhD1iJfWuLce1dZvjs2hn9ayagUIRBAhpvyWMkpwK5vlUPqMwc_ypkGTA55qHeArhh4jxkbZZU9k2_ikUuwaf1iQ-h8mO7-fBOJ8aG7gVHvgfZJcyctgEOvNZ_YJc-qGfCwgcdX3vA8gGtfL5e7oVGRfnJ-BYCmfZShnj8b5PgQJyYBfU0wQYvQ4DJF8HCCtTH11-Qvr_ywVXLZeeL02lbYrg0ihOoMi73Zn0_8FQON_gVx-BAmJFUbwGPfxyQmQQBll-B5cBB8hqBP92B-A-c4DEp1h-ByhyB-gZhDpoD-BKpepyJYAYQsAfQgDjgYByRKBEg8w8hckzQpRdVygQR_9SFQCQAog0AMC741BQkECawkDiC6BMA1IIB4BoD08LB-AqCn4v8QAAA9RTAXHACyTg-GfgGSOSQ6JSYAiQ6QuAnADyBQ2sfgabWzA1VgyQlyHAAqHAZMXQkQzGQcWPMpYwgqaLbQnATLKwmAwQLUK0SIBwjyWQ-QkAdYB6eQUVOg3AXQSAFIB_BjJVZ_BgGZEAWgX0LIT_b_M0WgTHTwoVfgYI-QXIoAA",__position:1,__code:'<ColorBox bgColor="primary">primary</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedPrimary">washedPrimary</ColorBox>\n<Spacer />\n<ColorBox bgColor="danger">danger</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedDanger">washedDanger</ColorBox>\n<Spacer />\n<ColorBox bgColor="success">success</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedSuccess">washedSuccess</ColorBox>\n<Spacer />\n<ColorBox bgColor="warning">warning</ColorBox>\n<Spacer />\n<ColorBox bgColor="washedWarning">washedWarning</ColorBox>\n<Spacer />\n<ColorBox bgColor="transparent">transparent</ColorBox>\n<Spacer />\n<ColorBox bgColor="inherit">inherit</ColorBox>\n<Spacer />\n<ColorBox bgColor="white">white</ColorBox>\n<Spacer />\n<ColorBox bgColor="lightest">lightest</ColorBox>\n<Spacer />\n<ColorBox bgColor="lighter">lighter</ColorBox>\n<Spacer />\n<ColorBox bgColor="light">light</ColorBox>\n<Spacer />\n<ColorBox bgColor="normal">normal</ColorBox>\n<Spacer />\n<ColorBox bgColor="dark">dark</ColorBox>\n<Spacer />\n<ColorBox bgColor="darker">darker</ColorBox>\n<Spacer />\n<ColorBox bgColor="darkest">darkest</ColorBox>',__scope:{props:this?this.props:r,ColorBox:c.a,Spacer:A.c}},a.a.createElement(c.a,{bgColor:"primary"},"primary"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"washedPrimary"},"washedPrimary"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"danger"},"danger"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"washedDanger"},"washedDanger"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"success"},"success"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"washedSuccess"},"washedSuccess"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"warning"},"warning"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"washedWarning"},"washedWarning"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"transparent"},"transparent"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"inherit"},"inherit"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"white"},"white"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"lightest"},"lightest"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"lighter"},"lighter"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"light"},"light"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"normal"},"normal"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"dark"},"dark"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"darker"},"darker"),a.a.createElement(A.c,null),a.a.createElement(c.a,{bgColor:"darkest"},"darkest")),a.a.createElement(t.MDXTag,{name:"h3",components:e,props:{id:"colorbox-borders"}},"ColorBox borders"),a.a.createElement(l.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZHCgYUb28N0TXaT04AEchASdah9DgSRoNg7wcMoGCBDgrB_QFe0pmAdhnBmSUMnYeQELlJDpFOAAvMjIPYIMpSY00tXaO0NXYKjNB8RjjWYgABGAiBEAZUHQrpBIDVBdFRY52OcAhEmxdhuBE9YogEZ5UCudoAAZ2GTGZSP3GtaK7ApzIAFls9gADZbPaeyLDAECADEfWgRJzP4ZxDkRR1MHYAAFIR-CWOSfjgWjER89Z_JoZwIDYy52AARhc-z5HBNTqA0gBBOZ9PYSMqPIGwoHQcMGM5fSxDqmMZHYVFdJgbhgEPNjtP6uB5G3WtgEa6AWuCAAyebxkSeZKGaGbmta7htvlMBQjUntUHadgAH4Nlm8NI3aq4Nrm1BSprKQZGrd8zFhYTMDAMIoCmK6Oq6x7qpXGtEx4ggcACzIUmvAhJtrNdCLwnxyCgfw4AAOR9Ab-C8ARp34dhcenXCBD4EABwFVwBEScRV3hinjJpkHaykEmSLhlmaLoo4tzphGiJInpUbgDGsbJomwRAQnhWJxHSf4dB3DSARaeZ-HFdnME1brAiBe8DnEy5xEeYN_mkaFtHMePcWZcl6W8YyEmyYZchERF1X4fhl23bgPnWbl9m_aN-jee1xg2fglHLbFnHbZVqWJYEJ3-BGKnUAKD3PYsVOBHT2c_d1pHTcYYOTb9iPkeF0Xrdjh34_t2WiLJtF3FSqn9EzrOW9QNvw1EMPC-I_Wg7SkPi4ri2Rat7GQETgnE-TkARhsWhO895eXiZAeK-L0v2FDrPw4DyOq-nm26_nuPF6gCAUkINf4Zvu_-8PwfA7DveD89o-9cr6Oa9nnHS-ddF4_AEFEKAD9axgIgQXHeI9ub73HsfP-U8Y6AIvgnK-csyaKwENsKBFg8EEO3igjmUgwYQyhjDSaUggYvTMN-EAKE0KfA3DQbCFc37eAAloCgIF9AMHIsJPqsAciSXlKI7IFo2GYQ4ZxCiIlepogKAxPi7QByUBmBaHS8w4AKOEg1FBN4UijVgEsKgv84J1zMd0CS7oWKWKRgACQXHCfRqpVLqSmJomYlgVrwFqsAdYHgUgkyuKiGcKRfIN0dnLCJKjZwlU8WYbxjpf61SkegHAMhijrAACTTWMaYnSsAHoWEKU4oeWBrHTlsQ9YoKTUAVxwL4_xejaptICXAJp70HSfW-lBFBnimHDUkKobAvCgK6FAgYcCfSph7wkSxUu_oFmNF0Ooz0DRdBrKwIomiaAXRHGWZ6Q5qBjl7MUQ0VAMxwgAHVMhzHoqcyQNy7kEEebMOE_omEsPQhmLC3CsDoV_q4qA7ipnaBmYI8CwiHQNRFmo5ZWSZEYUzAQDxZV1lpLPCRExJNaqRgmLJGASxQkk3atwTq0YawkuPDgUIEAADSLwPgoJwBSuWcAADaXKiIAF0zCfjevs4SaSqn4pKf1IlVF6VksJmEuWbV_rBJrGk6oBLlUGTxd4LVRFiWbGPOSpVRERU1i6AQPo5hNWmuFKuM6Zw4DFA8JKbYKQhD7XQGioiVxCm6pqXagQhrSUmspfIZUeTmbmX9BG7FYqHS4rHPi7BREiXyvJam4UVKaXrHlYyllbLJU8IXtyvlWaBBCo_J4nFFUpjFpqXHWxsqCShtiUnZV8gc2GXVXW6WjaQHatHAQFNg6DUZvbZSzxFhLXWv7bUuJREHU9BFi6uOPrhR-uAJqitEao3wxjZ4uNqBRnsUkKXKF_C9BgQgoorJ6jUWyIxVirxfa94GSyTktg-72DGVMhaLwNxIhXAKl5LAnjGnxsUQM0IP1qKjwECMpQIAxk7OoJe4C165m3pEaUvMKK8PeqfVhf0qS-1ofMB-wjOA26oB_bidAEwQMWVstO3wMBb6EGY6xkJ67MgsDyFcAArDxmsrqdgeraBgDd5Z2AAGIABMSm2MsFSqjUKnBUA3xdABmCOw2N_rQFcKyoHROQdUusmDcGKNIeUGM85xyMMwpvfCqYWSlhUW2DARIMosZ2HsYhR96KSNNLSTBTsqiDJeZ85kY8zr1gWQAKRKO7nAfy4CrhCAIFkSMFlMApE_AxdYBULJJZS5kHu6WiCZZEDl5MHk8swAK8qIrdHQtvpmEc-iVH-rZNo_RrgTH2AKZY-B9YmxOMECuCN0TFhE4Wn4xAQThVSuJbY4nab7k4CES4PJsA-31vrsAxEIgMmripdon3Nj7hKaHS3eFlgs5GIWRwAAdiE3YCydg0CQHTrQdg2mJSIfWKwDIMQ4hQAtPEW-Zlf1cHQLAFTthySuA02gQHunTjbAg70hNUwrOLM6xcjItmUNnveQ8p5cInMCJc1xe9BHetosBfIzxrmlGoFCEQQIRwAvMV8To7ppHyo9x8YOdpgSDJquzoNvAVxOfc4yMksqaSCfxS0XYKX6wGNDeTKV5Xr7ReNFuZT753XlG9a_awAbjG5fsEKfVfMsuVXUqd7b-QZmmkU8-VTjIrTxfdM6QHvRnjvdfOeQIHJMAvqwYIOrocBk1eDh6VBj60fBnG4-eHuEpO0rbFcGkXh1Bpm0-w9L9g_BUBY34FcfgQJiRVG8BkC0v5yRMhADE_goOBD5GoDXivIAXtD8SusBW8ByD9BmIdfv_BKq9XIrAGEWAfRt-ODAcklBEh5jyKos0Uo0XlBBE3-OneQBRDQDPlQEYNC-w76PlD6-6CYDUhAeA_fy8WH4Hv0QSAB8AD1QM3scALIR9mZ-AZI5JDolJ29a8QAACh8cAPJQD4Z-AgsWdMVL8_8XIcACocBkxkDax-ABddE39f9-AAChNECcAFMCDP9BAtQrRIhMDADXtgD-B1gHp5A_kj9cBdBIAUgi8T1oVS8GBgkQBaBfQsga868zRaAFsGDvl-AuD5AVCgA",__position:2,__code:'<ColorBox className="border" borderColor="primary">\n  primary\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="danger">\n  danger\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="success">\n  success\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="warning">\n  warning\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="transparent">\n  transparent\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="white">\n  white\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="light">\n  light\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="normal">\n  normal\n</ColorBox>\n<Spacer />\n<ColorBox className="border" borderColor="dark">\n  dark\n</ColorBox>',__scope:{props:this?this.props:r,ColorBox:c.a,Spacer:A.c}},a.a.createElement(c.a,{className:"border",borderColor:"primary"},"primary"),a.a.createElement(A.c,null),a.a.createElement(c.a,{className:"border",borderColor:"danger"},"danger"),a.a.createElement(A.c,null),a.a.createElement(c.a,{className:"border",borderColor:"success"},"success"),a.a.createElement(A.c,null),a.a.createElement(c.a,{className:"border",borderColor:"warning"},"warning"),a.a.createElement(A.c,null),a.a.createElement(c.a,{className:"border",borderColor:"transparent"},"transparent"),a.a.createElement(A.c,null),a.a.createElement(c.a,{className:"border",borderColor:"white"},"white"),a.a.createElement(A.c,null),a.a.createElement(c.a,{className:"border",borderColor:"light"},"light"),a.a.createElement(A.c,null),a.a.createElement(c.a,{className:"border",borderColor:"normal"},"normal"),a.a.createElement(A.c,null),a.a.createElement(c.a,{className:"border",borderColor:"dark"},"dark")))}}])&&g(r.prototype,n),s&&g(r,s),e}();C.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-color-box-color-box.b03f628202cc2c9d88ec.js.map