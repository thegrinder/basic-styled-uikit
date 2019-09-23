!function(e){function t(t){for(var o,r,a=t[0],i=t[1],s=t[2],d=t[3]||[],l=0,u=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(E,r)&&E[r]&&u.push(E[r][0]),E[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(H&&H(t),I.push.apply(I,d);u.length;)u.shift()();return B.push.apply(B,s||[]),n()}function n(){for(var e,t=0;t<B.length;t++){for(var n=B[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==E[a]&&(o=!1)}o&&(B.splice(t--,1),e=N(N.s=n[0]))}return 0===B.length&&(I.forEach((function(e){if(void 0===E[e]){E[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",N.nc&&t.setAttribute("nonce",N.nc),t.rel="prefetch",t.as="script",t.href=M(e),document.head.appendChild(t)}})),I.length=0),e}var o=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!k[e])return;for(var n in k[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0===--v&&0===b&&q()}(e,t),o&&o(e,t)};var r,a=!0,i="47b0c5c34ed2dde3ef2b",s=1e4,d={},l=[],u=[];function c(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:P,apply:T,status:function(e){if(!e)return m;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:d[e]};return r=void 0,t}var p=[],m="idle";function f(e){m=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,g,y,v=0,b=0,x={},k={},w={};function j(e){return+e+""===e?+e:e}function P(e){if("idle"!==m)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(t=s,t=t||1e4,new Promise((function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,r=N.p+""+i+".hot-update.json";o.open("GET",r,!0),o.timeout=t,o.send(null)}catch(a){return n(a)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(o.responseText)}catch(a){return void n(a)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;k={},x={},w=e.c,y=e.h,f("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in g={},E)O(n);return"prepare"===m&&0===b&&0===v&&q(),t}));var t}function O(e){w[e]?(k[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=N.p+""+e+"."+i+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):x[e]=!0}function q(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return T(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(j(n));e.resolve(t)}}function T(t){if("ready"!==m)throw new Error("apply() is only allowed in ready status");var n,o,r,a,s;function u(e){for(var t=[e],n={},o=t.map((function(e){return{chain:[e],id:e}}));o.length>0;){var r=o.pop(),i=r.id,s=r.chain;if((a=_[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var d=0;d<a.parents.length;d++){var l=a.parents[d],u=_[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),c(n[l],[i])):(delete n[l],t.push(l),o.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];-1===e.indexOf(o)&&e.push(o)}}t=t||{};var p={},h=[],v={},b=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var x in g)if(Object.prototype.hasOwnProperty.call(g,x)){var k;s=j(x);var P=!1,O=!1,q=!1,T="";switch((k=g[x]?u(s):{type:"disposed",moduleId:x}).chain&&(T="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+k.moduleId+T));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+T));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(P=new Error("Aborted because "+s+" is not accepted"+T));break;case"accepted":t.onAccepted&&t.onAccepted(k),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),q=!0;break;default:throw new Error("Unexception type "+k.type)}if(P)return f("abort"),Promise.reject(P);if(O)for(s in v[s]=g[s],c(h,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,s)&&(p[s]||(p[s]=[]),c(p[s],k.outdatedDependencies[s]));q&&(c(h,[k.moduleId]),v[s]=b)}var B,I=[];for(o=0;o<h.length;o++)s=h[o],_[s]&&_[s].hot._selfAccepted&&v[s]!==b&&I.push({module:s,errorHandler:_[s].hot._selfAccepted});f("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete E[e]}(e)}));for(var M,V,D=h.slice();D.length>0;)if(s=D.pop(),a=_[s]){var S={},H=a.hot._disposeHandlers;for(r=0;r<H.length;r++)(n=H[r])(S);for(d[s]=S,a.hot.active=!1,delete _[s],delete p[s],r=0;r<a.children.length;r++){var C=_[a.children[r]];C&&((B=C.parents.indexOf(s))>=0&&C.parents.splice(B,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(a=_[s]))for(V=p[s],r=0;r<V.length;r++)M=V[r],(B=a.children.indexOf(M))>=0&&a.children.splice(B,1);for(s in f("apply"),i=y,v)Object.prototype.hasOwnProperty.call(v,s)&&(e[s]=v[s]);var z=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(a=_[s])){V=p[s];var L=[];for(o=0;o<V.length;o++)if(M=V[o],n=a.hot._acceptedDependencies[M]){if(-1!==L.indexOf(n))continue;L.push(n)}for(o=0;o<L.length;o++){n=L[o];try{n(V)}catch(A){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:V[o],error:A}),t.ignoreErrored||z||(z=A)}}}for(o=0;o<I.length;o++){var F=I[o];s=F.module,l=[s];try{N(s)}catch(A){if("function"===typeof F.errorHandler)try{F.errorHandler(A)}catch(R){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:R,originalError:A}),t.ignoreErrored||z||(z=R),z||(z=A)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:A}),t.ignoreErrored||z||(z=A)}}return z?(f("fail"),Promise.reject(z)):(f("idle"),new Promise((function(e){e(h)})))}var _={},E={2:0},B=[],I=[];function M(e){return N.p+"static/js/"+({1:"src-components-box-box~src-components-button-button~src-components-form-form~src-components-link-lin~89978e81",3:"src-components-box-box",4:"src-components-button-button",5:"src-components-form-form",6:"src-components-link-link",7:"src-components-misc-misc",8:"src-components-mode-mode",9:"src-components-typography-typography",10:"src-getting-started",11:"src-index"}[e]||e)+"."+{1:"650f81b4",3:"cf4eaa9c",4:"1b39cdd6",5:"7b1d8242",6:"c5f1ac2f",7:"bf87a789",8:"43460265",9:"b541018f",10:"b07bc7a5",11:"a3f58013"}[e]+".js"}function N(t){if(_[t])return _[t].exports;var n=_[t]={i:t,l:!1,exports:{},hot:c(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=_[e];if(!t)return N;var n=function(n){return t.hot.active?(_[n]?-1===_[n].parents.indexOf(e)&&_[n].parents.push(e):(l=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),N(n)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return N[e]},set:function(t){N[e]=t}}};for(var a in N)Object.prototype.hasOwnProperty.call(N,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,o(a));return n.e=function(e){return"ready"===m&&f("prepare"),b++,N.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===m&&(x[e]||O(e),0===b&&0===v&&q())}},n.t=function(e,t){return 1&t&&(e=n(e)),N.t(e,-2&t)},n}(t)),n.l=!0,n.exports}N.e=function(e){var t=[],n=E[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=E[e]=[t,o]}));t.push(n[2]=o);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,N.nc&&a.setAttribute("nonce",N.nc),a.src=M(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous");var i=new Error;r=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=E[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",i.name="ChunkLoadError",i.type=o,i.request=r,n[1](i)}E[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(t)},N.m=e,N.c=_,N.d=function(e,t,n){N.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},N.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},N.t=function(e,t){if(1&t&&(e=N(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(N.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)N.d(n,o,function(t){return e[t]}.bind(null,o));return n},N.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return N.d(t,"a",t),t},N.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},N.p="/basic-styled-uikit/",N.oe=function(e){throw console.error(e),e},N.h=function(){return i};var V=window.webpackJsonp=window.webpackJsonp||[],D=V.push.bind(V);V.push=t,V=V.slice();for(var S=0;S<V.length;S++)t(V[S]);var H=D,C=(B.push([0,0]),n());t([[],{},0,[0,1,3,4,5,6,9,7,8,10,11]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"Basic Styled Uikit","description":"A set of basic react UI components built with styled-components","menu":[],"version":"2.1.0","repository":"https://github.com/thegrinder/basic-styled-uikit","native":false,"codeSandbox":false,"themeConfig":{"mode":"light"},"separator":"-","wrapper":"../../docz/Wrapper","base":"/basic-styled-uikit/"},"props":[{"key":"docz/Wrapper.js","value":[{"description":"","displayName":"Wrapper","methods":[],"actualName":"Wrapper","props":{"children":{"type":{"name":"node"},"required":true,"description":""}}}]},{"key":"src/components/Box/Box.js","value":[{"description":"","displayName":"Box","methods":[],"actualName":"Box","props":{"bgColor":{"type":{"name":"string"},"required":false,"description":"bgColors keys in the theme passed to <BoxProvider />"},"elevation":{"type":{"name":"number"},"required":false,"description":"elevations keys in the theme passed to <BoxProvider />"}}}]},{"key":"src/components/Button/Button.js","value":[{"description":"","displayName":"Button","methods":[],"actualName":"Button","props":{"submitting":{"type":{"name":"bool"},"required":false,"description":"submitting flag that shows a component passed to renderSpinner prop","defaultValue":{"value":"false","computed":false}},"btnType":{"type":{"name":"string"},"required":false,"description":"btnTypes keys in the theme passed to <ButtonProvider />","defaultValue":{"value":"\'default\'","computed":false}},"sizing":{"type":{"name":"string"},"required":false,"description":"sizings keys in the theme passed to <ButtonProvider />","defaultValue":{"value":"\'m\'","computed":false}},"renderSpinner":{"type":{"name":"node"},"required":false,"description":"spinner component shown when submitting flag is true"},"as":{"type":{"name":"union","value":[{"name":"enum","value":[{"value":"\'a\'","computed":false},{"value":"\'button\'","computed":false}]},{"name":"func"}]},"required":false,"description":"rendered html tag or custom router link component","defaultValue":{"value":"\'button\'","computed":false}},"children":{"type":{"name":"node"},"required":false,"description":""}}}]},{"key":"src/components/Link/Link.js","value":[{"description":"","displayName":"Link","methods":[],"actualName":"Link","props":{"sizing":{"type":{"name":"string"},"required":false,"description":"sizings keys in the theme passed to <TypographyProvider />","defaultValue":{"value":"\'m\'","computed":false}},"linkType":{"type":{"name":"string"},"required":false,"description":"linkTypes keys in the theme passed to <LinkProvider />","defaultValue":{"value":"\'default\'","computed":false}},"as":{"type":{"name":"union","value":[{"name":"enum","value":[{"value":"\'a\'","computed":false},{"value":"\'button\'","computed":false}]},{"name":"func"}]},"required":false,"description":"rendered html tag or custom router link component","defaultValue":{"value":"\'a\'","computed":false}}}}]},{"key":"src/components/Mode/ModeProvider.js","value":[{"description":"","displayName":"ModeProvider","methods":[],"actualName":"ModeProvider","props":{"initialMode":{"type":{"name":"enum","value":[{"value":"\'light\'","computed":false},{"value":"\'dark\'","computed":false}]},"required":false,"description":"initial mode","defaultValue":{"value":"\'light\'","computed":false}},"children":{"type":{"name":"node"},"required":true,"description":""}}}]},{"key":"src/components/Form/Checkbox/Checkbox.js","value":[{"description":"","displayName":"Checkbox","methods":[],"actualName":"Checkbox","props":{"invalid":{"type":{"name":"bool"},"required":false,"description":"invalid flag","defaultValue":{"value":"false","computed":false}}}}]},{"key":"src/components/Form/InlineInput/InlineInput.js","value":[{"description":"","displayName":"InlineInput","methods":[],"actualName":"InlineInput","props":{"submitting":{"type":{"name":"bool"},"required":false,"description":"submitting flag that shows a component passed to renderSpinner prop","defaultValue":{"value":"false","computed":false}},"disabled":{"type":{"name":"bool"},"required":false,"description":"disabled flag","defaultValue":{"value":"false","computed":false}},"invalid":{"type":{"name":"bool"},"required":false,"description":"invalid flag","defaultValue":{"value":"false","computed":false}},"renderSpinner":{"type":{"name":"node"},"required":false,"description":"spinner component shown when submitting flag is true"}}}]},{"key":"src/components/Form/Input/Input.js","value":[{"description":"","displayName":"Input","methods":[],"actualName":"Input","props":{"invalid":{"type":{"name":"bool"},"required":false,"description":"invalid flag","defaultValue":{"value":"false","computed":false}}}}]},{"key":"src/components/Form/Radio/Radio.js","value":[{"description":"","displayName":"Radio","methods":[],"actualName":"Radio","props":{"invalid":{"type":{"name":"bool"},"required":false,"description":"invalid flag","defaultValue":{"value":"false","computed":false}}}}]},{"key":"src/components/Form/Select/Select.js","value":[{"description":"","displayName":"Select","methods":[],"actualName":"Select","props":{"invalid":{"type":{"name":"bool"},"required":false,"description":"invalid flag","defaultValue":{"value":"false","computed":false}}}}]},{"key":"src/components/Form/Textarea/Textarea.js","value":[{"description":"","displayName":"Textarea","methods":[],"actualName":"Textarea","props":{"invalid":{"type":{"name":"bool"},"required":false,"description":"invalid flag","defaultValue":{"value":"false","computed":false}}}}]},{"key":"src/components/Form/Toggle/Toggle.js","value":[{"description":"","displayName":"Toggle","methods":[],"actualName":"Toggle","props":{"h":{"type":{"name":"number"},"required":false,"description":"height of the Toggle","defaultValue":{"value":"34","computed":false}},"disabled":{"type":{"name":"bool"},"required":false,"description":"disabled flag","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"onChange handler"}}}]},{"key":"src/components/Typography/Heading/Heading.js","value":[{"description":"","displayName":"Heading","methods":[],"actualName":"Heading","props":{"sizing":{"type":{"name":"enum","value":[{"value":"\'h1\'","computed":false},{"value":"\'h2\'","computed":false},{"value":"\'h3\'","computed":false},{"value":"\'h4\'","computed":false},{"value":"\'h5\'","computed":false},{"value":"\'h6\'","computed":false}]},"required":false,"description":"sizings keys in the theme passed to <TypographyProvider />"},"color":{"type":{"name":"string"},"required":false,"description":"colors keys in the theme passed to <TypographyProvider />","defaultValue":{"value":"\'neutral\'","computed":false}},"emphasis":{"type":{"name":"string"},"required":false,"description":"opacities keys in the theme passed to <TypographyProvider />","defaultValue":{"value":"\'high\'","computed":false}},"ignoreBackground":{"type":{"name":"bool"},"required":false,"description":"determines whether the color defined for the background is ignored","defaultValue":{"value":"false","computed":false}},"as":{"type":{"name":"enum","value":[{"value":"\'h1\'","computed":false},{"value":"\'h2\'","computed":false},{"value":"\'h3\'","computed":false},{"value":"\'h4\'","computed":false},{"value":"\'h5\'","computed":false},{"value":"\'h6\'","computed":false}]},"required":true,"description":"determines the html tag and size, if sizing prop is not specified"},"marginBottom":{"type":{"name":"bool"},"required":false,"description":"if true adds a bottom margin according to vertical rhythm","defaultValue":{"value":"false","computed":false}}}}]},{"key":"src/components/Typography/Text/Text.js","value":[{"description":"","displayName":"Text","methods":[],"actualName":"Text","props":{"sizing":{"type":{"name":"string"},"required":false,"description":"sizings keys in the theme passed to <TypographyProvider />","defaultValue":{"value":"\'m\'","computed":false}},"color":{"type":{"name":"string"},"required":false,"description":"colors keys in the theme passed to <TypographyProvider />","defaultValue":{"value":"\'neutral\'","computed":false}},"emphasis":{"type":{"name":"string"},"required":false,"description":"opacities keys in the theme passed to <TypographyProvider />","defaultValue":{"value":"\'high\'","computed":false}},"ignoreBackground":{"type":{"name":"bool"},"required":false,"description":"determines whether the color defined for the background is ignored","defaultValue":{"value":"false","computed":false}},"as":{"type":{"name":"enum","value":[{"value":"\'span\'","computed":false},{"value":"\'p\'","computed":false}]},"required":false,"description":"rendered html tag","defaultValue":{"value":"\'span\'","computed":false}},"marginBottom":{"type":{"name":"bool"},"required":false,"description":"if true adds a bottom margin according to vertical rhythm","defaultValue":{"value":"false","computed":false}}}}]}],"entries":[{"key":"src/getting-started.mdx","value":{"name":"Getting started","route":"/basic-styled-uikit/getting-started","id":"1ffaebd174da11b32fa9e92ca9687156","filepath":"src/getting-started.mdx","link":"https://github.com/thegrinder/basic-styled-uikit/edit/master/src/getting-started.mdx","slug":"src-getting-started","menu":"","headings":[{"slug":"getting-started","depth":1,"value":"Getting started"},{"slug":"installation","depth":2,"value":"Installation"},{"slug":"setup","depth":2,"value":"Setup"}]}},{"key":"src/index.mdx","value":{"name":"Home","route":"/basic-styled-uikit/","id":"6576455a124f9aaefd860597f03a8fe4","filepath":"src/index.mdx","link":"https://github.com/thegrinder/basic-styled-uikit/edit/master/src/index.mdx","slug":"src-index","menu":"","headings":[{"slug":"basic-styled-uikit","depth":1,"value":"Basic Styled Uikit"},{"slug":"motivation","depth":2,"value":"Motivation"},{"slug":"simple-customization","depth":3,"value":"Simple customization"},{"slug":"dark-mode","depth":3,"value":"Dark mode"},{"slug":"theming","depth":3,"value":"Theming"},{"slug":"technology","depth":3,"value":"Technology"}]}},{"key":"src/components/Box/box.mdx","value":{"name":"Box","menu":"Components","route":"/basic-styled-uikit/components/box","id":"3c780bea7e91a977bd0faca3f4e7ce5c","filepath":"src/components/Box/box.mdx","link":"https://github.com/thegrinder/basic-styled-uikit/edit/master/src/components/Box/box.mdx","slug":"src-components-box-box","headings":[{"slug":"boxprovider","depth":2,"value":"BoxProvider"},{"slug":"box","depth":2,"value":"Box"},{"slug":"example","depth":3,"value":"Example"}]}},{"key":"src/components/Button/button.mdx","value":{"name":"Button","menu":"Components","route":"/basic-styled-uikit/components/button","id":"c3a4162ba271ddbeabea462f799cd4e0","filepath":"src/components/Button/button.mdx","link":"https://github.com/thegrinder/basic-styled-uikit/edit/master/src/components/Button/button.mdx","slug":"src-components-button-button","headings":[{"slug":"buttonprovider","depth":2,"value":"ButtonProvider"},{"slug":"button","depth":2,"value":"Button"},{"slug":"example","depth":3,"value":"Example"}]}},{"key":"src/components/Form/form.mdx","value":{"name":"Form","menu":"Components","route":"/basic-styled-uikit/components/form","id":"5f7b97fdbba4ccda13c2fe55d7f73751","filepath":"src/components/Form/form.mdx","link":"https://github.com/thegrinder/basic-styled-uikit/edit/master/src/components/Form/form.mdx","slug":"src-components-form-form","headings":[{"slug":"formprovider","depth":2,"value":"FormProvider"},{"slug":"input","depth":2,"value":"Input"},{"slug":"inlineinput","depth":2,"value":"InlineInput"},{"slug":"textarea","depth":2,"value":"Textarea"},{"slug":"select","depth":2,"value":"Select"},{"slug":"radio","depth":2,"value":"Radio"},{"slug":"checkbox","depth":2,"value":"Checkbox"},{"slug":"toggle","depth":2,"value":"Toggle"},{"slug":"example","depth":3,"value":"Example"}]}},{"key":"src/components/Link/link.mdx","value":{"name":"Link","menu":"Components","route":"/basic-styled-uikit/components/link","id":"9f01de21205b13d67efe9c141c8b5d45","filepath":"src/components/Link/link.mdx","link":"https://github.com/thegrinder/basic-styled-uikit/edit/master/src/components/Link/link.mdx","slug":"src-components-link-link","headings":[{"slug":"linkprovider","depth":2,"value":"LinkProvider"},{"slug":"link","depth":2,"value":"Link"},{"slug":"example","depth":3,"value":"Example"}]}},{"key":"src/components/Misc/misc.mdx","value":{"name":"Misc","menu":"Components","route":"/basic-styled-uikit/components/misc","id":"b7ebca6bdd937f08da661a500808c805","filepath":"src/components/Misc/misc.mdx","link":"https://github.com/thegrinder/basic-styled-uikit/edit/master/src/components/Misc/misc.mdx","slug":"src-components-misc-misc","headings":[{"slug":"resetcss","depth":2,"value":"ResetCss"},{"slug":"plainbutton","depth":2,"value":"PlainButton"}]}},{"key":"src/components/Mode/mode.mdx","value":{"name":"Mode","menu":"Components","route":"/basic-styled-uikit/components/mode","id":"3a8738dbecfc8d707d9539597ad6b80f","filepath":"src/components/Mode/mode.mdx","link":"https://github.com/thegrinder/basic-styled-uikit/edit/master/src/components/Mode/mode.mdx","slug":"src-components-mode-mode","headings":[{"slug":"modeprovider","depth":2,"value":"ModeProvider"},{"slug":"usemode","depth":2,"value":"useMode"},{"slug":"example","depth":3,"value":"Example"}]}},{"key":"src/components/Typography/typography.mdx","value":{"name":"Typography","menu":"Components","route":"/basic-styled-uikit/components/typography","id":"4f89d4f40f0132be2b99054f4031dab8","filepath":"src/components/Typography/typography.mdx","link":"https://github.com/thegrinder/basic-styled-uikit/edit/master/src/components/Typography/typography.mdx","slug":"src-components-typography-typography","headings":[{"slug":"typographyprovider","depth":2,"value":"TypographyProvider"},{"slug":"heading","depth":2,"value":"Heading"},{"slug":"text","depth":2,"value":"Text"},{"slug":"example","depth":3,"value":"Example"}]}}]}')},"./.docz/app/index.jsx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/react-dom/index.js"),i=n.n(a),s=n("./node_modules/docz/dist/index.esm.js"),d=n("./node_modules/docz-theme-default/dist/index.esm.js"),l={"src/getting-started.mdx":function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"./src/getting-started.mdx"))},"src/index.mdx":function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"./src/index.mdx"))},"src/components/Box/box.mdx":function(){return Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"./src/components/Box/box.mdx"))},"src/components/Button/button.mdx":function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,"./src/components/Button/button.mdx"))},"src/components/Form/form.mdx":function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"./src/components/Form/form.mdx"))},"src/components/Link/link.mdx":function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,"./src/components/Link/link.mdx"))},"src/components/Misc/misc.mdx":function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"./src/components/Misc/misc.mdx"))},"src/components/Mode/mode.mdx":function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"./src/components/Mode/mode.mdx"))},"src/components/Typography/typography.mdx":function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"./src/components/Typography/typography.mdx"))}},u=n("./.docz/app/db.json"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),p=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function m(){var e=Object(c.a)(["\n  @import url('https://rsms.me/inter/inter.css');\n\n  * {\n    margin: 0;\n  }\n\n  html {\n    font-family: 'Inter', sans-serif;\n  }\n\n  html .margin-bottom {\n    display: block;\n    margin-bottom: 16px;\n  }\n\n  html .padding {\n    padding: 16px;\n  }\n\n  html .max-width-m {\n    max-width: 300px;\n  }\n\n  html .max-width-s {\n    max-width: 70px;\n  }\n\n  @supports (font-variation-settings: normal) {\n    html {\n      font-family: 'Inter var', sans-serif;\n    }\n  }\n"]);return m=function(){return e},e}var f=Object(p.b)(m()),h=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GlobalStyle",filename:"docz/GlobalStyle.js"}});var g=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),t)},y=g;g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Wrapper",filename:"docz/Wrapper.js"}});var v=function(){return r.a.createElement(d.a,{wrapper:y,linkComponent:s.b,db:u},r.a.createElement(s.e,{imports:l}))},b=[],x=[],k=function(){return b.forEach((function(e){return e&&e()}))},w=function(){return x.forEach((function(e){return e&&e()}))},j=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;k(),i.a.render(r.a.createElement(e,null),j,w)}(v)},0:function(e,t,n){e.exports=n("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.47b0c5c34ed2dde3ef2b.js.map