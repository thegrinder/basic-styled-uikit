import { css } from 'styled-components';

const tachyons = css`
  article, aside, footer, header, nav, section { display: block; }
  h1 { font-size: 2em; margin: .67em 0; }
  figcaption, figure, main { display: block; }
  figure { margin: 1em 40px; }
  hr { box-sizing: content-box; height: 0; overflow: visible; }
  pre { font-family: monospace, monospace; font-size: 1em; }
  a { background-color: transparent; -webkit-text-decoration-skip: objects; }
  abbr[title] { border-bottom: none; text-decoration: underline; text-decoration: underline dotted; }
  b, strong { font-weight: inherit; }
  b, strong { font-weight: bolder; }
  code, kbd, samp { font-family: monospace, monospace; font-size: 1em; }
  dfn { font-style: italic; }
  mark { background-color: #ff0; color: #000; }
  small { font-size: 80%; }
  sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }
  sub { bottom: -0.25em; }
  sup { top: -0.5em; }
  audio, video { display: inline-block; }
  audio:not([controls]) { display: none; height: 0; }
  img { border-style: none; }
  svg:not(:root) { overflow: hidden; }
  button, input, optgroup, select, textarea { font-family: sans-serif; font-size: 100%; line-height: 1.15; margin: 0; }
  button, input { overflow: visible; }
  button, select { text-transform: none; }
  button, body [type="button"], [type="reset"], [type="submit"] { -webkit-appearance: button; }
  button::-moz-focus-inner, [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner { border-style: none; padding: 0; }
  button:-moz-focusring, [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring { outline: 1px dotted ButtonText; }
  fieldset { padding: .35em .75em .625em; }
  legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; padding: 0; /* 3 */ white-space: normal; }
  progress { display: inline-block; vertical-align: baseline; }
  textarea { overflow: auto; }
  [type="checkbox"], [type="radio"] { box-sizing: border-box; padding: 0; }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button { height: auto; }
  [type="search"] { -webkit-appearance: textfield; outline-offset: -2px; }
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration { -webkit-appearance: none; }
  ::-webkit-file-upload-button { -webkit-appearance: button; font: inherit; }
  details, menu { display: block; }
  summary { display: list-item; }
  canvas { display: inline-block; }
  template { display: none; }
  [hidden] { display: none; }
  div, article, section, main, footer, header, form, fieldset, legend,
  pre, code, a, h1, h2, h3, h4, h5, h6, p, ul, ol, li, dl, dt, dd, textarea, table,
  td, th, tr, input[type="email"], input[type="number"], input[type="password"],
  input[type="tel"], input[type="text"], input[type="url"], .border-box { box-sizing: border-box; }
  .aspect-ratio { height: 0; position: relative; }
  .aspect-ratio--16x9 { padding-bottom: 56.25%; }
  .aspect-ratio--9x16 { padding-bottom: 177.77%; }
  .aspect-ratio--4x3 { padding-bottom: 75%; }
  .aspect-ratio--3x4 { padding-bottom: 133.33%; }
  .aspect-ratio--6x4 { padding-bottom: 66.6%; }
  .aspect-ratio--4x6 { padding-bottom: 150%; }
  .aspect-ratio--8x5 { padding-bottom: 62.5%; }
  .aspect-ratio--5x8 { padding-bottom: 160%; }
  .aspect-ratio--7x5 { padding-bottom: 71.42%; }
  .aspect-ratio--5x7 { padding-bottom: 140%; }
  .aspect-ratio--1x1 { padding-bottom: 100%; }
  .aspect-ratio--object { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }
  img { max-width: 100%; }
  .cover { background-size: cover !important; }
  .contain { background-size: contain !important; }
  .bg-center { background-repeat: no-repeat; background-position: center center; }
  .bg-top { background-repeat: no-repeat; background-position: top center; }
  .bg-right { background-repeat: no-repeat; background-position: center right; }
  .bg-bottom { background-repeat: no-repeat; background-position: bottom center; }
  .bg-left { background-repeat: no-repeat; background-position: center left; }
  .outline { outline: 1px solid; }
  .outline-transparent { outline: 1px solid transparent; }
  .outline-0 { outline: 0; }
  .ba { border-style: solid; border-width: 1px; }
  .bt { border-top-style: solid; border-top-width: 1px; }
  .br { border-right-style: solid; border-right-width: 1px; }
  .bb { border-bottom-style: solid; border-bottom-width: 1px; }
  .bl { border-left-style: solid; border-left-width: 1px; }
  .bn { border-style: none; border-width: 0; }
  .b--black { border-color: #000; }
  .b--near-black { border-color: #111; }
  .b--dark-gray { border-color: #333; }
  .b--mid-gray { border-color: #555; }
  .b--gray { border-color: #777; }
  .b--silver { border-color: #999; }
  .b--light-silver { border-color: #aaa; }
  .b--moon-gray { border-color: #ccc; }
  .b--light-gray { border-color: #eee; }
  .b--near-white { border-color: #f4f4f4; }
  .b--white { border-color: #fff; }
  .b--white-90 { border-color: rgba( 255, 255, 255, .9 ); }
  .b--white-80 { border-color: rgba( 255, 255, 255, .8 ); }
  .b--white-70 { border-color: rgba( 255, 255, 255, .7 ); }
  .b--white-60 { border-color: rgba( 255, 255, 255, .6 ); }
  .b--white-50 { border-color: rgba( 255, 255, 255, .5 ); }
  .b--white-40 { border-color: rgba( 255, 255, 255, .4 ); }
  .b--white-30 { border-color: rgba( 255, 255, 255, .3 ); }
  .b--white-20 { border-color: rgba( 255, 255, 255, .2 ); }
  .b--white-10 { border-color: rgba( 255, 255, 255, .1 ); }
  .b--white-05 { border-color: rgba( 255, 255, 255, .05 ); }
  .b--white-025 { border-color: rgba( 255, 255, 255, .025 ); }
  .b--white-0125 { border-color: rgba( 255, 255, 255, .0125 ); }
  .b--black-90 { border-color: rgba( 0, 0, 0, .9 ); }
  .b--black-80 { border-color: rgba( 0, 0, 0, .8 ); }
  .b--black-70 { border-color: rgba( 0, 0, 0, .7 ); }
  .b--black-60 { border-color: rgba( 0, 0, 0, .6 ); }
  .b--black-50 { border-color: rgba( 0, 0, 0, .5 ); }
  .b--black-40 { border-color: rgba( 0, 0, 0, .4 ); }
  .b--black-30 { border-color: rgba( 0, 0, 0, .3 ); }
  .b--black-20 { border-color: rgba( 0, 0, 0, .2 ); }
  .b--black-10 { border-color: rgba( 0, 0, 0, .1 ); }
  .b--black-05 { border-color: rgba( 0, 0, 0, .05 ); }
  .b--black-025 { border-color: rgba( 0, 0, 0, .025 ); }
  .b--black-0125 { border-color: rgba( 0, 0, 0, .0125 ); }
  .b--dark-red { border-color: #e7040f; }
  .b--red { border-color: #ff4136; }
  .b--light-red { border-color: #ff725c; }
  .b--orange { border-color: #ff6300; }
  .b--gold { border-color: #ffb700; }
  .b--yellow { border-color: #ffd700; }
  .b--light-yellow { border-color: #fbf1a9; }
  .b--purple { border-color: #5e2ca5; }
  .b--light-purple { border-color: #a463f2; }
  .b--dark-pink { border-color: #d5008f; }
  .b--hot-pink { border-color: #ff41b4; }
  .b--pink { border-color: #ff80cc; }
  .b--light-pink { border-color: #ffa3d7; }
  .b--dark-green { border-color: #137752; }
  .b--green { border-color: #19a974; }
  .b--light-green { border-color: #9eebcf; }
  .b--navy { border-color: #001b44; }
  .b--dark-blue { border-color: #00449e; }
  .b--blue { border-color: #357edd; }
  .b--light-blue { border-color: #96ccff; }
  .b--lightest-blue { border-color: #cdecff; }
  .b--washed-blue { border-color: #f6fffe; }
  .b--washed-green { border-color: #e8fdf5; }
  .b--washed-yellow { border-color: #fffceb; }
  .b--washed-red { border-color: #ffdfdf; }
  .b--transparent { border-color: transparent; }
  .b--inherit { border-color: inherit; }
  .br0 { border-radius: 0; }
  .br1 { border-radius: .125rem; }
  .br2 { border-radius: .25rem; }
  .br3 { border-radius: .5rem; }
  .br4 { border-radius: 1rem; }
  .br-100 { border-radius: 100%; }
  .br-pill { border-radius: 9999px; }
  .br--bottom { border-top-left-radius: 0; border-top-right-radius: 0; }
  .br--top { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
  .br--right { border-top-left-radius: 0; border-bottom-left-radius: 0; }
  .br--left { border-top-right-radius: 0; border-bottom-right-radius: 0; }
  .b--dotted { border-style: dotted; }
  .b--dashed { border-style: dashed; }
  .b--solid { border-style: solid; }
  .b--none { border-style: none; }
  .bw0 { border-width: 0; }
  .bw1 { border-width: .125rem; }
  .bw2 { border-width: .25rem; }
  .bw3 { border-width: .5rem; }
  .bw4 { border-width: 1rem; }
  .bw5 { border-width: 2rem; }
  .bt-0 { border-top-width: 0; }
  .br-0 { border-right-width: 0; }
  .bb-0 { border-bottom-width: 0; }
  .bl-0 { border-left-width: 0; }
  .shadow-1 { box-shadow: 0 0 4px 2px rgba( 0, 0, 0, .2 ); }
  .shadow-2 { box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 ); }
  .shadow-3 { box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, .2 ); }
  .shadow-4 { box-shadow: 2px 2px 8px 0 rgba( 0, 0, 0, .2 ); }
  .shadow-5 { box-shadow: 4px 4px 8px 0 rgba( 0, 0, 0, .2 ); }
  .pre { overflow-x: auto; overflow-y: hidden; overflow: scroll; }
  .top-0 { top: 0; }
  .right-0 { right: 0; }
  .bottom-0 { bottom: 0; }
  .left-0 { left: 0; }
  .top-1 { top: 1rem; }
  .right-1 { right: 1rem; }
  .bottom-1 { bottom: 1rem; }
  .left-1 { left: 1rem; }
  .top-2 { top: 2rem; }
  .right-2 { right: 2rem; }
  .bottom-2 { bottom: 2rem; }
  .left-2 { left: 2rem; }
  .top--1 { top: -1rem; }
  .right--1 { right: -1rem; }
  .bottom--1 { bottom: -1rem; }
  .left--1 { left: -1rem; }
  .top--2 { top: -2rem; }
  .right--2 { right: -2rem; }
  .bottom--2 { bottom: -2rem; }
  .left--2 { left: -2rem; }
  .absolute--fill { top: 0; right: 0; bottom: 0; left: 0; }
  .dn { display: none; }
  .di { display: inline; }
  .db { display: block; }
  .dib { display: inline-block; }
  .dit { display: inline-table; }
  .dt { display: table; }
  .dtc { display: table-cell; }
  .dt-row { display: table-row; }
  .dt-row-group { display: table-row-group; }
  .dt-column { display: table-column; }
  .dt-column-group { display: table-column-group; }
  .dt--fixed { table-layout: fixed; width: 100%; }
  .flex { display: -webkit-box; display: -ms-flexbox; display: flex; }
  .inline-flex { display: -webkit-inline-box; display: -ms-inline-flexbox; display: inline-flex; }
  .flex-none { -webkit-box-flex: 0; -ms-flex: none; flex: none; }
  .flex-column { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; }
  .flex-row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; }
  .flex-wrap { -ms-flex-wrap: wrap; flex-wrap: wrap; }
  .flex-nowrap { -ms-flex-wrap: nowrap; flex-wrap: nowrap; }
  .flex-wrap-reverse { -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }
  .flex-column-reverse { -webkit-box-orient: vertical; -webkit-box-direction: reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse; }
  .flex-row-reverse { -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; }
  .items-start { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; }
  .items-end { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end; }
  .items-center { -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
  .items-baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline; }
  .items-stretch { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; }
  .self-start { -ms-flex-item-align: start; align-self: flex-start; }
  .self-end { -ms-flex-item-align: end; align-self: flex-end; }
  .self-center { -ms-flex-item-align: center; -ms-grid-row-align: center; align-self: center; }
  .self-baseline { -ms-flex-item-align: baseline; align-self: baseline; }
  .self-stretch { -ms-flex-item-align: stretch; -ms-grid-row-align: stretch; align-self: stretch; }
  .justify-start { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; }
  .justify-end { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; }
  .justify-center { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; }
  .justify-between { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; }
  .justify-around { -ms-flex-pack: distribute; justify-content: space-around; }
  .content-start { -ms-flex-line-pack: start; align-content: flex-start; }
  .content-end { -ms-flex-line-pack: end; align-content: flex-end; }
  .content-center { -ms-flex-line-pack: center; align-content: center; }
  .content-between { -ms-flex-line-pack: justify; align-content: space-between; }
  .content-around { -ms-flex-line-pack: distribute; align-content: space-around; }
  .content-stretch { -ms-flex-line-pack: stretch; align-content: stretch; }
  .order-0 { -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0; }
  .order-1 { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; }
  .order-2 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; }
  .order-3 { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3; }
  .order-4 { -webkit-box-ordinal-group: 5; -ms-flex-order: 4; order: 4; }
  .order-5 { -webkit-box-ordinal-group: 6; -ms-flex-order: 5; order: 5; }
  .order-6 { -webkit-box-ordinal-group: 7; -ms-flex-order: 6; order: 6; }
  .order-7 { -webkit-box-ordinal-group: 8; -ms-flex-order: 7; order: 7; }
  .order-8 { -webkit-box-ordinal-group: 9; -ms-flex-order: 8; order: 8; }
  .order-last { -webkit-box-ordinal-group: 100000; -ms-flex-order: 99999; order: 99999; }
  .i { font-style: italic; }
  .fs-normal { font-style: normal; }
  .normal { font-weight: normal; }
  .b { font-weight: bold; }
  .fw1 { font-weight: 100; }
  .fw2 { font-weight: 200; }
  .fw3 { font-weight: 300; }
  .fw4 { font-weight: 400; }
  .fw5 { font-weight: 500; }
  .fw6 { font-weight: 600; }
  .fw7 { font-weight: 700; }
  .fw8 { font-weight: 800; }
  .fw9 { font-weight: 900; }
  .input-reset { -webkit-appearance: none; -moz-appearance: none; }
  .button-reset::-moz-focus-inner, .input-reset::-moz-focus-inner { border: 0; padding: 0; }
  .h1 { height: 1rem; }
  .h2 { height: 2rem; }
  .h3 { height: 4rem; }
  .h4 { height: 8rem; }
  .h5 { height: 16rem; }
  .h-25 { height: 25%; }
  .h-50 { height: 50%; }
  .h-75 { height: 75%; }
  .h-100 { height: 100%; }
  .min-h-100 { min-height: 100%; }
  .vh-25 { height: 25vh; }
  .vh-50 { height: 50vh; }
  .vh-75 { height: 75vh; }
  .vh-100 { height: 100vh; }
  .min-vh-100 { min-height: 100vh; }
  .h-auto { height: auto; }
  .h-inherit { height: inherit; }
  .tracked { letter-spacing: .1em; }
  .tracked-tight { letter-spacing: -.05em; }
  .tracked-mega { letter-spacing: .25em; }
  .lh-solid { line-height: 1; }
  .lh-title { line-height: 1.25; }
  .lh-copy { line-height: 1.5; }
  .link { text-decoration: none; transition: color .15s ease-in; }
  .link:link, .link:visited { transition: color .15s ease-in; }
  .link:hover { transition: color .15s ease-in; }
  .link:active { transition: color .15s ease-in; }
  .link:focus { transition: color .15s ease-in; outline: 1px dotted currentColor; }
  .list { list-style-type: none; }
  .mw-100 { max-width: 100%; }
  .mw1 { max-width: 1rem; }
  .mw2 { max-width: 2rem; }
  .mw3 { max-width: 4rem; }
  .mw4 { max-width: 8rem; }
  .mw5 { max-width: 16rem; }
  .mw6 { max-width: 32rem; }
  .mw7 { max-width: 48rem; }
  .mw8 { max-width: 64rem; }
  .mw9 { max-width: 96rem; }
  .mw-none { max-width: none; }
  .w1 { width: 1rem; }
  .w2 { width: 2rem; }
  .w3 { width: 4rem; }
  .w4 { width: 8rem; }
  .w5 { width: 16rem; }
  .w-10 { width: 10%; }
  .w-20 { width: 20%; }
  .w-25 { width: 25%; }
  .w-30 { width: 30%; }
  .w-33 { width: 33%; }
  .w-34 { width: 34%; }
  .w-40 { width: 40%; }
  .w-50 { width: 50%; }
  .w-60 { width: 60%; }
  .w-70 { width: 70%; }
  .w-75 { width: 75%; }
  .w-80 { width: 80%; }
  .w-90 { width: 90%; }
  .w-100 { width: 100%; }
  .w-third { width: calc( 100% / 3 ); }
  .w-two-thirds { width: calc( 100% / 1.5 ); }
  .w-auto { width: auto; }
  .overflow-visible { overflow: visible; }
  .overflow-hidden { overflow: hidden; }
  .overflow-scroll { overflow: scroll; }
  .overflow-auto { overflow: auto; }
  .overflow-x-visible { overflow-x: visible; }
  .overflow-x-hidden { overflow-x: hidden; }
  .overflow-x-scroll { overflow-x: scroll; }
  .overflow-x-auto { overflow-x: auto; }
  .overflow-y-visible { overflow-y: visible; }
  .overflow-y-hidden { overflow-y: hidden; }
  .overflow-y-scroll { overflow-y: scroll; }
  .overflow-y-auto { overflow-y: auto; }
  .static { position: static; }
  .relative { position: relative; }
  .absolute { position: absolute; }
  .fixed { position: fixed; }
  .o-100 { opacity: 1; }
  .o-90 { opacity: .9; }
  .o-80 { opacity: .8; }
  .o-70 { opacity: .7; }
  .o-60 { opacity: .6; }
  .o-50 { opacity: .5; }
  .o-40 { opacity: .4; }
  .o-30 { opacity: .3; }
  .o-20 { opacity: .2; }
  .o-10 { opacity: .1; }
  .o-05 { opacity: .05; }
  .o-025 { opacity: .025; }
  .o-0 { opacity: 0; }
  .rotate-45 { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }
  .rotate-90 { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }
  .rotate-135 { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }
  .rotate-180 { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }
  .rotate-225 { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }
  .rotate-270 { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }
  .rotate-315 { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }
  .black-90 { color: rgba( 0, 0, 0, .9 ); }
  .black-80 { color: rgba( 0, 0, 0, .8 ); }
  .black-70 { color: rgba( 0, 0, 0, .7 ); }
  .black-60 { color: rgba( 0, 0, 0, .6 ); }
  .black-50 { color: rgba( 0, 0, 0, .5 ); }
  .black-40 { color: rgba( 0, 0, 0, .4 ); }
  .black-30 { color: rgba( 0, 0, 0, .3 ); }
  .black-20 { color: rgba( 0, 0, 0, .2 ); }
  .black-10 { color: rgba( 0, 0, 0, .1 ); }
  .black-05 { color: rgba( 0, 0, 0, .05 ); }
  .white-90 { color: rgba( 255, 255, 255, .9 ); }
  .white-80 { color: rgba( 255, 255, 255, .8 ); }
  .white-70 { color: rgba( 255, 255, 255, .7 ); }
  .white-60 { color: rgba( 255, 255, 255, .6 ); }
  .white-50 { color: rgba( 255, 255, 255, .5 ); }
  .white-40 { color: rgba( 255, 255, 255, .4 ); }
  .white-30 { color: rgba( 255, 255, 255, .3 ); }
  .white-20 { color: rgba( 255, 255, 255, .2 ); }
  .white-10 { color: rgba( 255, 255, 255, .1 ); }
  .black { color: #000; }
  .near-black { color: #111; }
  .dark-gray { color: #333; }
  .mid-gray { color: #555; }
  .gray { color: #777; }
  .silver { color: #999; }
  .light-silver { color: #aaa; }
  .moon-gray { color: #ccc; }
  .light-gray { color: #eee; }
  .near-white { color: #f4f4f4; }
  .white { color: #fff; }
  .dark-red { color: #e7040f; }
  .red { color: #ff4136; }
  .light-red { color: #ff725c; }
  .orange { color: #ff6300; }
  .gold { color: #ffb700; }
  .yellow { color: #ffd700; }
  .light-yellow { color: #fbf1a9; }
  .purple { color: #5e2ca5; }
  .light-purple { color: #a463f2; }
  .dark-pink { color: #d5008f; }
  .hot-pink { color: #ff41b4; }
  .pink { color: #ff80cc; }
  .light-pink { color: #ffa3d7; }
  .dark-green { color: #137752; }
  .green { color: #19a974; }
  .light-green { color: #9eebcf; }
  .navy { color: #001b44; }
  .dark-blue { color: #00449e; }
  .blue { color: #357edd; }
  .light-blue { color: #96ccff; }
  .lightest-blue { color: #cdecff; }
  .washed-blue { color: #f6fffe; }
  .washed-green { color: #e8fdf5; }
  .washed-yellow { color: #fffceb; }
  .washed-red { color: #ffdfdf; }
  .color-inherit { color: inherit; }
  .bg-black-90 { background-color: rgba( 0, 0, 0, .9 ); }
  .bg-black-80 { background-color: rgba( 0, 0, 0, .8 ); }
  .bg-black-70 { background-color: rgba( 0, 0, 0, .7 ); }
  .bg-black-60 { background-color: rgba( 0, 0, 0, .6 ); }
  .bg-black-50 { background-color: rgba( 0, 0, 0, .5 ); }
  .bg-black-40 { background-color: rgba( 0, 0, 0, .4 ); }
  .bg-black-30 { background-color: rgba( 0, 0, 0, .3 ); }
  .bg-black-20 { background-color: rgba( 0, 0, 0, .2 ); }
  .bg-black-10 { background-color: rgba( 0, 0, 0, .1 ); }
  .bg-black-05 { background-color: rgba( 0, 0, 0, .05 ); }
  .bg-white-90 { background-color: rgba( 255, 255, 255, .9 ); }
  .bg-white-80 { background-color: rgba( 255, 255, 255, .8 ); }
  .bg-white-70 { background-color: rgba( 255, 255, 255, .7 ); }
  .bg-white-60 { background-color: rgba( 255, 255, 255, .6 ); }
  .bg-white-50 { background-color: rgba( 255, 255, 255, .5 ); }
  .bg-white-40 { background-color: rgba( 255, 255, 255, .4 ); }
  .bg-white-30 { background-color: rgba( 255, 255, 255, .3 ); }
  .bg-white-20 { background-color: rgba( 255, 255, 255, .2 ); }
  .bg-white-10 { background-color: rgba( 255, 255, 255, .1 ); }
  .bg-black { background-color: #000; }
  .bg-near-black { background-color: #111; }
  .bg-dark-gray { background-color: #333; }
  .bg-mid-gray { background-color: #555; }
  .bg-gray { background-color: #777; }
  .bg-silver { background-color: #999; }
  .bg-light-silver { background-color: #aaa; }
  .bg-moon-gray { background-color: #ccc; }
  .bg-light-gray { background-color: #eee; }
  .bg-near-white { background-color: #f4f4f4; }
  .bg-white { background-color: #fff; }
  .bg-transparent { background-color: transparent; }
  .bg-dark-red { background-color: #e7040f; }
  .bg-red { background-color: #ff4136; }
  .bg-light-red { background-color: #ff725c; }
  .bg-orange { background-color: #ff6300; }
  .bg-gold { background-color: #ffb700; }
  .bg-yellow { background-color: #ffd700; }
  .bg-light-yellow { background-color: #fbf1a9; }
  .bg-purple { background-color: #5e2ca5; }
  .bg-light-purple { background-color: #a463f2; }
  .bg-dark-pink { background-color: #d5008f; }
  .bg-hot-pink { background-color: #ff41b4; }
  .bg-pink { background-color: #ff80cc; }
  .bg-light-pink { background-color: #ffa3d7; }
  .bg-dark-green { background-color: #137752; }
  .bg-green { background-color: #19a974; }
  .bg-light-green { background-color: #9eebcf; }
  .bg-navy { background-color: #001b44; }
  .bg-dark-blue { background-color: #00449e; }
  .bg-blue { background-color: #357edd; }
  .bg-light-blue { background-color: #96ccff; }
  .bg-lightest-blue { background-color: #cdecff; }
  .bg-washed-blue { background-color: #f6fffe; }
  .bg-washed-green { background-color: #e8fdf5; }
  .bg-washed-yellow { background-color: #fffceb; }
  .bg-washed-red { background-color: #ffdfdf; }
  .bg-inherit { background-color: inherit; }
  .hover-black:hover { color: #000; }
  .hover-black:focus { color: #000; }
  .hover-near-black:hover { color: #111; }
  .hover-near-black:focus { color: #111; }
  .hover-dark-gray:hover { color: #333; }
  .hover-dark-gray:focus { color: #333; }
  .hover-mid-gray:hover { color: #555; }
  .hover-mid-gray:focus { color: #555; }
  .hover-gray:hover { color: #777; }
  .hover-gray:focus { color: #777; }
  .hover-silver:hover { color: #999; }
  .hover-silver:focus { color: #999; }
  .hover-light-silver:hover { color: #aaa; }
  .hover-light-silver:focus { color: #aaa; }
  .hover-moon-gray:hover { color: #ccc; }
  .hover-moon-gray:focus { color: #ccc; }
  .hover-light-gray:hover { color: #eee; }
  .hover-light-gray:focus { color: #eee; }
  .hover-near-white:hover { color: #f4f4f4; }
  .hover-near-white:focus { color: #f4f4f4; }
  .hover-white:hover { color: #fff; }
  .hover-white:focus { color: #fff; }
  .hover-black-90:hover { color: rgba( 0, 0, 0, .9 ); }
  .hover-black-90:focus { color: rgba( 0, 0, 0, .9 ); }
  .hover-black-80:hover { color: rgba( 0, 0, 0, .8 ); }
  .hover-black-80:focus { color: rgba( 0, 0, 0, .8 ); }
  .hover-black-70:hover { color: rgba( 0, 0, 0, .7 ); }
  .hover-black-70:focus { color: rgba( 0, 0, 0, .7 ); }
  .hover-black-60:hover { color: rgba( 0, 0, 0, .6 ); }
  .hover-black-60:focus { color: rgba( 0, 0, 0, .6 ); }
  .hover-black-50:hover { color: rgba( 0, 0, 0, .5 ); }
  .hover-black-50:focus { color: rgba( 0, 0, 0, .5 ); }
  .hover-black-40:hover { color: rgba( 0, 0, 0, .4 ); }
  .hover-black-40:focus { color: rgba( 0, 0, 0, .4 ); }
  .hover-black-30:hover { color: rgba( 0, 0, 0, .3 ); }
  .hover-black-30:focus { color: rgba( 0, 0, 0, .3 ); }
  .hover-black-20:hover { color: rgba( 0, 0, 0, .2 ); }
  .hover-black-20:focus { color: rgba( 0, 0, 0, .2 ); }
  .hover-black-10:hover { color: rgba( 0, 0, 0, .1 ); }
  .hover-black-10:focus { color: rgba( 0, 0, 0, .1 ); }
  .hover-white-90:hover { color: rgba( 255, 255, 255, .9 ); }
  .hover-white-90:focus { color: rgba( 255, 255, 255, .9 ); }
  .hover-white-80:hover { color: rgba( 255, 255, 255, .8 ); }
  .hover-white-80:focus { color: rgba( 255, 255, 255, .8 ); }
  .hover-white-70:hover { color: rgba( 255, 255, 255, .7 ); }
  .hover-white-70:focus { color: rgba( 255, 255, 255, .7 ); }
  .hover-white-60:hover { color: rgba( 255, 255, 255, .6 ); }
  .hover-white-60:focus { color: rgba( 255, 255, 255, .6 ); }
  .hover-white-50:hover { color: rgba( 255, 255, 255, .5 ); }
  .hover-white-50:focus { color: rgba( 255, 255, 255, .5 ); }
  .hover-white-40:hover { color: rgba( 255, 255, 255, .4 ); }
  .hover-white-40:focus { color: rgba( 255, 255, 255, .4 ); }
  .hover-white-30:hover { color: rgba( 255, 255, 255, .3 ); }
  .hover-white-30:focus { color: rgba( 255, 255, 255, .3 ); }
  .hover-white-20:hover { color: rgba( 255, 255, 255, .2 ); }
  .hover-white-20:focus { color: rgba( 255, 255, 255, .2 ); }
  .hover-white-10:hover { color: rgba( 255, 255, 255, .1 ); }
  .hover-white-10:focus { color: rgba( 255, 255, 255, .1 ); }
  .hover-inherit:hover, .hover-inherit:focus { color: inherit; }
  .hover-bg-black:hover { background-color: #000; }
  .hover-bg-black:focus { background-color: #000; }
  .hover-bg-near-black:hover { background-color: #111; }
  .hover-bg-near-black:focus { background-color: #111; }
  .hover-bg-dark-gray:hover { background-color: #333; }
  .hover-bg-dark-gray:focus { background-color: #333; }
  .hover-bg-mid-gray:hover { background-color: #555; }
  .hover-bg-mid-gray:focus { background-color: #555; }
  .hover-bg-gray:hover { background-color: #777; }
  .hover-bg-gray:focus { background-color: #777; }
  .hover-bg-silver:hover { background-color: #999; }
  .hover-bg-silver:focus { background-color: #999; }
  .hover-bg-light-silver:hover { background-color: #aaa; }
  .hover-bg-light-silver:focus { background-color: #aaa; }
  .hover-bg-moon-gray:hover { background-color: #ccc; }
  .hover-bg-moon-gray:focus { background-color: #ccc; }
  .hover-bg-light-gray:hover { background-color: #eee; }
  .hover-bg-light-gray:focus { background-color: #eee; }
  .hover-bg-near-white:hover { background-color: #f4f4f4; }
  .hover-bg-near-white:focus { background-color: #f4f4f4; }
  .hover-bg-white:hover { background-color: #fff; }
  .hover-bg-white:focus { background-color: #fff; }
  .hover-bg-transparent:hover { background-color: transparent; }
  .hover-bg-transparent:focus { background-color: transparent; }
  .hover-bg-black-90:hover { background-color: rgba( 0, 0, 0, .9 ); }
  .hover-bg-black-90:focus { background-color: rgba( 0, 0, 0, .9 ); }
  .hover-bg-black-80:hover { background-color: rgba( 0, 0, 0, .8 ); }
  .hover-bg-black-80:focus { background-color: rgba( 0, 0, 0, .8 ); }
  .hover-bg-black-70:hover { background-color: rgba( 0, 0, 0, .7 ); }
  .hover-bg-black-70:focus { background-color: rgba( 0, 0, 0, .7 ); }
  .hover-bg-black-60:hover { background-color: rgba( 0, 0, 0, .6 ); }
  .hover-bg-black-60:focus { background-color: rgba( 0, 0, 0, .6 ); }
  .hover-bg-black-50:hover { background-color: rgba( 0, 0, 0, .5 ); }
  .hover-bg-black-50:focus { background-color: rgba( 0, 0, 0, .5 ); }
  .hover-bg-black-40:hover { background-color: rgba( 0, 0, 0, .4 ); }
  .hover-bg-black-40:focus { background-color: rgba( 0, 0, 0, .4 ); }
  .hover-bg-black-30:hover { background-color: rgba( 0, 0, 0, .3 ); }
  .hover-bg-black-30:focus { background-color: rgba( 0, 0, 0, .3 ); }
  .hover-bg-black-20:hover { background-color: rgba( 0, 0, 0, .2 ); }
  .hover-bg-black-20:focus { background-color: rgba( 0, 0, 0, .2 ); }
  .hover-bg-black-10:hover { background-color: rgba( 0, 0, 0, .1 ); }
  .hover-bg-black-10:focus { background-color: rgba( 0, 0, 0, .1 ); }
  .hover-bg-white-90:hover { background-color: rgba( 255, 255, 255, .9 ); }
  .hover-bg-white-90:focus { background-color: rgba( 255, 255, 255, .9 ); }
  .hover-bg-white-80:hover { background-color: rgba( 255, 255, 255, .8 ); }
  .hover-bg-white-80:focus { background-color: rgba( 255, 255, 255, .8 ); }
  .hover-bg-white-70:hover { background-color: rgba( 255, 255, 255, .7 ); }
  .hover-bg-white-70:focus { background-color: rgba( 255, 255, 255, .7 ); }
  .hover-bg-white-60:hover { background-color: rgba( 255, 255, 255, .6 ); }
  .hover-bg-white-60:focus { background-color: rgba( 255, 255, 255, .6 ); }
  .hover-bg-white-50:hover { background-color: rgba( 255, 255, 255, .5 ); }
  .hover-bg-white-50:focus { background-color: rgba( 255, 255, 255, .5 ); }
  .hover-bg-white-40:hover { background-color: rgba( 255, 255, 255, .4 ); }
  .hover-bg-white-40:focus { background-color: rgba( 255, 255, 255, .4 ); }
  .hover-bg-white-30:hover { background-color: rgba( 255, 255, 255, .3 ); }
  .hover-bg-white-30:focus { background-color: rgba( 255, 255, 255, .3 ); }
  .hover-bg-white-20:hover { background-color: rgba( 255, 255, 255, .2 ); }
  .hover-bg-white-20:focus { background-color: rgba( 255, 255, 255, .2 ); }
  .hover-bg-white-10:hover { background-color: rgba( 255, 255, 255, .1 ); }
  .hover-bg-white-10:focus { background-color: rgba( 255, 255, 255, .1 ); }
  .hover-dark-red:hover { color: #e7040f; }
  .hover-dark-red:focus { color: #e7040f; }
  .hover-red:hover { color: #ff4136; }
  .hover-red:focus { color: #ff4136; }
  .hover-light-red:hover { color: #ff725c; }
  .hover-light-red:focus { color: #ff725c; }
  .hover-orange:hover { color: #ff6300; }
  .hover-orange:focus { color: #ff6300; }
  .hover-gold:hover { color: #ffb700; }
  .hover-gold:focus { color: #ffb700; }
  .hover-yellow:hover { color: #ffd700; }
  .hover-yellow:focus { color: #ffd700; }
  .hover-light-yellow:hover { color: #fbf1a9; }
  .hover-light-yellow:focus { color: #fbf1a9; }
  .hover-purple:hover { color: #5e2ca5; }
  .hover-purple:focus { color: #5e2ca5; }
  .hover-light-purple:hover { color: #a463f2; }
  .hover-light-purple:focus { color: #a463f2; }
  .hover-dark-pink:hover { color: #d5008f; }
  .hover-dark-pink:focus { color: #d5008f; }
  .hover-hot-pink:hover { color: #ff41b4; }
  .hover-hot-pink:focus { color: #ff41b4; }
  .hover-pink:hover { color: #ff80cc; }
  .hover-pink:focus { color: #ff80cc; }
  .hover-light-pink:hover { color: #ffa3d7; }
  .hover-light-pink:focus { color: #ffa3d7; }
  .hover-dark-green:hover { color: #137752; }
  .hover-dark-green:focus { color: #137752; }
  .hover-green:hover { color: #19a974; }
  .hover-green:focus { color: #19a974; }
  .hover-light-green:hover { color: #9eebcf; }
  .hover-light-green:focus { color: #9eebcf; }
  .hover-navy:hover { color: #001b44; }
  .hover-navy:focus { color: #001b44; }
  .hover-dark-blue:hover { color: #00449e; }
  .hover-dark-blue:focus { color: #00449e; }
  .hover-blue:hover { color: #357edd; }
  .hover-blue:focus { color: #357edd; }
  .hover-light-blue:hover { color: #96ccff; }
  .hover-light-blue:focus { color: #96ccff; }
  .hover-lightest-blue:hover { color: #cdecff; }
  .hover-lightest-blue:focus { color: #cdecff; }
  .hover-washed-blue:hover { color: #f6fffe; }
  .hover-washed-blue:focus { color: #f6fffe; }
  .hover-washed-green:hover { color: #e8fdf5; }
  .hover-washed-green:focus { color: #e8fdf5; }
  .hover-washed-yellow:hover { color: #fffceb; }
  .hover-washed-yellow:focus { color: #fffceb; }
  .hover-washed-red:hover { color: #ffdfdf; }
  .hover-washed-red:focus { color: #ffdfdf; }
  .hover-bg-dark-red:hover { background-color: #e7040f; }
  .hover-bg-dark-red:focus { background-color: #e7040f; }
  .hover-bg-red:hover { background-color: #ff4136; }
  .hover-bg-red:focus { background-color: #ff4136; }
  .hover-bg-light-red:hover { background-color: #ff725c; }
  .hover-bg-light-red:focus { background-color: #ff725c; }
  .hover-bg-orange:hover { background-color: #ff6300; }
  .hover-bg-orange:focus { background-color: #ff6300; }
  .hover-bg-gold:hover { background-color: #ffb700; }
  .hover-bg-gold:focus { background-color: #ffb700; }
  .hover-bg-yellow:hover { background-color: #ffd700; }
  .hover-bg-yellow:focus { background-color: #ffd700; }
  .hover-bg-light-yellow:hover { background-color: #fbf1a9; }
  .hover-bg-light-yellow:focus { background-color: #fbf1a9; }
  .hover-bg-purple:hover { background-color: #5e2ca5; }
  .hover-bg-purple:focus { background-color: #5e2ca5; }
  .hover-bg-light-purple:hover { background-color: #a463f2; }
  .hover-bg-light-purple:focus { background-color: #a463f2; }
  .hover-bg-dark-pink:hover { background-color: #d5008f; }
  .hover-bg-dark-pink:focus { background-color: #d5008f; }
  .hover-bg-hot-pink:hover { background-color: #ff41b4; }
  .hover-bg-hot-pink:focus { background-color: #ff41b4; }
  .hover-bg-pink:hover { background-color: #ff80cc; }
  .hover-bg-pink:focus { background-color: #ff80cc; }
  .hover-bg-light-pink:hover { background-color: #ffa3d7; }
  .hover-bg-light-pink:focus { background-color: #ffa3d7; }
  .hover-bg-dark-green:hover { background-color: #137752; }
  .hover-bg-dark-green:focus { background-color: #137752; }
  .hover-bg-green:hover { background-color: #19a974; }
  .hover-bg-green:focus { background-color: #19a974; }
  .hover-bg-light-green:hover { background-color: #9eebcf; }
  .hover-bg-light-green:focus { background-color: #9eebcf; }
  .hover-bg-navy:hover { background-color: #001b44; }
  .hover-bg-navy:focus { background-color: #001b44; }
  .hover-bg-dark-blue:hover { background-color: #00449e; }
  .hover-bg-dark-blue:focus { background-color: #00449e; }
  .hover-bg-blue:hover { background-color: #357edd; }
  .hover-bg-blue:focus { background-color: #357edd; }
  .hover-bg-light-blue:hover { background-color: #96ccff; }
  .hover-bg-light-blue:focus { background-color: #96ccff; }
  .hover-bg-lightest-blue:hover { background-color: #cdecff; }
  .hover-bg-lightest-blue:focus { background-color: #cdecff; }
  .hover-bg-washed-blue:hover { background-color: #f6fffe; }
  .hover-bg-washed-blue:focus { background-color: #f6fffe; }
  .hover-bg-washed-green:hover { background-color: #e8fdf5; }
  .hover-bg-washed-green:focus { background-color: #e8fdf5; }
  .hover-bg-washed-yellow:hover { background-color: #fffceb; }
  .hover-bg-washed-yellow:focus { background-color: #fffceb; }
  .hover-bg-washed-red:hover { background-color: #ffdfdf; }
  .hover-bg-washed-red:focus { background-color: #ffdfdf; }
  .hover-bg-inherit:hover, .hover-bg-inherit:focus { background-color: inherit; }
  .pa0 { padding: 0; }
  .pa1 { padding: .25rem; }
  .pa2 { padding: .5rem; }
  .pa3 { padding: 1rem; }
  .pa4 { padding: 2rem; }
  .pa5 { padding: 4rem; }
  .pa6 { padding: 8rem; }
  .pa7 { padding: 16rem; }
  .pl0 { padding-left: 0; }
  .pl1 { padding-left: .25rem; }
  .pl2 { padding-left: .5rem; }
  .pl3 { padding-left: 1rem; }
  .pl4 { padding-left: 2rem; }
  .pl5 { padding-left: 4rem; }
  .pl6 { padding-left: 8rem; }
  .pl7 { padding-left: 16rem; }
  .pr0 { padding-right: 0; }
  .pr1 { padding-right: .25rem; }
  .pr2 { padding-right: .5rem; }
  .pr3 { padding-right: 1rem; }
  .pr4 { padding-right: 2rem; }
  .pr5 { padding-right: 4rem; }
  .pr6 { padding-right: 8rem; }
  .pr7 { padding-right: 16rem; }
  .pb0 { padding-bottom: 0; }
  .pb1 { padding-bottom: .25rem; }
  .pb2 { padding-bottom: .5rem; }
  .pb3 { padding-bottom: 1rem; }
  .pb4 { padding-bottom: 2rem; }
  .pb5 { padding-bottom: 4rem; }
  .pb6 { padding-bottom: 8rem; }
  .pb7 { padding-bottom: 16rem; }
  .pt0 { padding-top: 0; }
  .pt1 { padding-top: .25rem; }
  .pt2 { padding-top: .5rem; }
  .pt3 { padding-top: 1rem; }
  .pt4 { padding-top: 2rem; }
  .pt5 { padding-top: 4rem; }
  .pt6 { padding-top: 8rem; }
  .pt7 { padding-top: 16rem; }
  .pv0 { padding-top: 0; padding-bottom: 0; }
  .pv1 { padding-top: .25rem; padding-bottom: .25rem; }
  .pv2 { padding-top: .5rem; padding-bottom: .5rem; }
  .pv3 { padding-top: 1rem; padding-bottom: 1rem; }
  .pv4 { padding-top: 2rem; padding-bottom: 2rem; }
  .pv5 { padding-top: 4rem; padding-bottom: 4rem; }
  .pv6 { padding-top: 8rem; padding-bottom: 8rem; }
  .pv7 { padding-top: 16rem; padding-bottom: 16rem; }
  .ph0 { padding-left: 0; padding-right: 0; }
  .ph1 { padding-left: .25rem; padding-right: .25rem; }
  .ph2 { padding-left: .5rem; padding-right: .5rem; }
  .ph3 { padding-left: 1rem; padding-right: 1rem; }
  .ph4 { padding-left: 2rem; padding-right: 2rem; }
  .ph5 { padding-left: 4rem; padding-right: 4rem; }
  .ph6 { padding-left: 8rem; padding-right: 8rem; }
  .ph7 { padding-left: 16rem; padding-right: 16rem; }
  .ma0 { margin: 0; }
  .ma1 { margin: .25rem; }
  .ma2 { margin: .5rem; }
  .ma3 { margin: 1rem; }
  .ma4 { margin: 2rem; }
  .ma5 { margin: 4rem; }
  .ma6 { margin: 8rem; }
  .ma7 { margin: 16rem; }
  .ml0 { margin-left: 0; }
  .ml1 { margin-left: .25rem; }
  .ml2 { margin-left: .5rem; }
  .ml3 { margin-left: 1rem; }
  .ml4 { margin-left: 2rem; }
  .ml5 { margin-left: 4rem; }
  .ml6 { margin-left: 8rem; }
  .ml7 { margin-left: 16rem; }
  .mr0 { margin-right: 0; }
  .mr1 { margin-right: .25rem; }
  .mr2 { margin-right: .5rem; }
  .mr3 { margin-right: 1rem; }
  .mr4 { margin-right: 2rem; }
  .mr5 { margin-right: 4rem; }
  .mr6 { margin-right: 8rem; }
  .mr7 { margin-right: 16rem; }
  .mb0 { margin-bottom: 0; }
  .mb1 { margin-bottom: .25rem; }
  .mb2 { margin-bottom: .5rem; }
  .mb3 { margin-bottom: 1rem; }
  .mb4 { margin-bottom: 2rem; }
  .mb5 { margin-bottom: 4rem; }
  .mb6 { margin-bottom: 8rem; }
  .mb7 { margin-bottom: 16rem; }
  .mt0 { margin-top: 0; }
  .mt1 { margin-top: .25rem; }
  .mt2 { margin-top: .5rem; }
  .mt3 { margin-top: 1rem; }
  .mt4 { margin-top: 2rem; }
  .mt5 { margin-top: 4rem; }
  .mt6 { margin-top: 8rem; }
  .mt7 { margin-top: 16rem; }
  .mv0 { margin-top: 0; margin-bottom: 0; }
  .mv1 { margin-top: .25rem; margin-bottom: .25rem; }
  .mv2 { margin-top: .5rem; margin-bottom: .5rem; }
  .mv3 { margin-top: 1rem; margin-bottom: 1rem; }
  .mv4 { margin-top: 2rem; margin-bottom: 2rem; }
  .mv5 { margin-top: 4rem; margin-bottom: 4rem; }
  .mv6 { margin-top: 8rem; margin-bottom: 8rem; }
  .mv7 { margin-top: 16rem; margin-bottom: 16rem; }
  .mh0 { margin-left: 0; margin-right: 0; }
  .mh1 { margin-left: .25rem; margin-right: .25rem; }
  .mh2 { margin-left: .5rem; margin-right: .5rem; }
  .mh3 { margin-left: 1rem; margin-right: 1rem; }
  .mh4 { margin-left: 2rem; margin-right: 2rem; }
  .mh5 { margin-left: 4rem; margin-right: 4rem; }
  .mh6 { margin-left: 8rem; margin-right: 8rem; }
  .mh7 { margin-left: 16rem; margin-right: 16rem; }
  .na1 { margin: -.25rem; }
  .na2 { margin: -.5rem; }
  .na3 { margin: -1rem; }
  .na4 { margin: -2rem; }
  .na5 { margin: -4rem; }
  .na6 { margin: -8rem; }
  .na7 { margin: -16rem; }
  .nl1 { margin-left: -.25rem; }
  .nl2 { margin-left: -.5rem; }
  .nl3 { margin-left: -1rem; }
  .nl4 { margin-left: -2rem; }
  .nl5 { margin-left: -4rem; }
  .nl6 { margin-left: -8rem; }
  .nl7 { margin-left: -16rem; }
  .nr1 { margin-right: -.25rem; }
  .nr2 { margin-right: -.5rem; }
  .nr3 { margin-right: -1rem; }
  .nr4 { margin-right: -2rem; }
  .nr5 { margin-right: -4rem; }
  .nr6 { margin-right: -8rem; }
  .nr7 { margin-right: -16rem; }
  .nb1 { margin-bottom: -.25rem; }
  .nb2 { margin-bottom: -.5rem; }
  .nb3 { margin-bottom: -1rem; }
  .nb4 { margin-bottom: -2rem; }
  .nb5 { margin-bottom: -4rem; }
  .nb6 { margin-bottom: -8rem; }
  .nb7 { margin-bottom: -16rem; }
  .nt1 { margin-top: -.25rem; }
  .nt2 { margin-top: -.5rem; }
  .nt3 { margin-top: -1rem; }
  .nt4 { margin-top: -2rem; }
  .nt5 { margin-top: -4rem; }
  .nt6 { margin-top: -8rem; }
  .nt7 { margin-top: -16rem; }
  .collapse { border-collapse: collapse; border-spacing: 0; }
  .striped--light-silver:nth-child(odd) { background-color: #aaa; }
  .striped--moon-gray:nth-child(odd) { background-color: #ccc; }
  .striped--light-gray:nth-child(odd) { background-color: #eee; }
  .striped--near-white:nth-child(odd) { background-color: #f4f4f4; }
  .stripe-light:nth-child(odd) { background-color: rgba( 255, 255, 255, .1 ); }
  .stripe-dark:nth-child(odd) { background-color: rgba( 0, 0, 0, .1 ); }
  .strike { text-decoration: line-through; }
  .underline { text-decoration: underline; }
  .no-underline { text-decoration: none; }
  .tl { text-align: left; }
  .tr { text-align: right; }
  .tc { text-align: center; }
  .tj { text-align: justify; }
  .ttc { text-transform: capitalize; }
  .ttl { text-transform: lowercase; }
  .ttu { text-transform: uppercase; }
  .ttn { text-transform: none; }
  .measure { max-width: 30em; }
  .measure-wide { max-width: 34em; }
  .measure-narrow { max-width: 20em; }
  .indent { text-indent: 1em; margin-top: 0; margin-bottom: 0; }
  .small-caps { font-variant: small-caps; }
  .truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .overflow-container { overflow-y: scroll; }
  .center { margin-right: auto; margin-left: auto; }
  .mr-auto { margin-right: auto; }
  .ml-auto { margin-left: auto; }
  .clip { position: fixed !important; _position: absolute !important; clip: rect( 1px 1px 1px 1px ); clip: rect( 1px, 1px, 1px, 1px ); }
  .ws-normal { white-space: normal; }
  .nowrap { white-space: nowrap; }
  .pre { white-space: pre; }
  .v-base { vertical-align: baseline; }
  .v-mid { vertical-align: middle; }
  .v-top { vertical-align: top; }
  .v-btm { vertical-align: bottom; }
  .dim { opacity: 1; transition: opacity .15s ease-in; }
  .dim:hover, .dim:focus { opacity: .5; transition: opacity .15s ease-in; }
  .dim:active { opacity: .8; transition: opacity .15s ease-out; }
  .glow { transition: opacity .15s ease-in; }
  .glow:hover, .glow:focus { opacity: 1; transition: opacity .15s ease-in; }
  .hide-child .child { opacity: 0; transition: opacity .15s ease-in; }
  .hide-child:hover  .child, .hide-child:focus  .child, .hide-child:active .child { opacity: 1; transition: opacity .15s ease-in; }
  .underline-hover:hover, .underline-hover:focus { text-decoration: underline; }
  .grow { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ( 0 ); transform: translateZ( 0 ); transition: -webkit-transform .25s ease-out; transition: transform .25s ease-out; transition: transform .25s ease-out, -webkit-transform .25s ease-out; }
  .grow:hover, .grow:focus { -webkit-transform: scale( 1.05 ); transform: scale( 1.05 ); }
  .grow:active { -webkit-transform: scale( .90 ); transform: scale( .90 ); }
  .grow-large { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ( 0 ); transform: translateZ( 0 ); transition: -webkit-transform .25s ease-in-out; transition: transform .25s ease-in-out; transition: transform .25s ease-in-out, -webkit-transform .25s ease-in-out; }
  .grow-large:hover, .grow-large:focus { -webkit-transform: scale( 1.2 ); transform: scale( 1.2 ); }
  .grow-large:active { -webkit-transform: scale( .95 ); transform: scale( .95 ); }
  .pointer:hover { cursor: pointer; }
  .shadow-hover { cursor: pointer; position: relative; transition: all .5s cubic-bezier( .165, .84, .44, 1 ); }
  .shadow-hover::after { content: ''; box-shadow: 0 0 16px 2px rgba( 0, 0, 0, .2 ); border-radius: inherit; opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; transition: opacity .5s cubic-bezier( .165, .84, .44, 1 ); }
  .shadow-hover:hover::after, .shadow-hover:focus::after { opacity: 1; }
  .bg-animate, .bg-animate:hover, .bg-animate:focus { transition: background-color .15s ease-in-out; }
  .z-0 { z-index: 0; }
  .z-1 { z-index: 1; }
  .z-2 { z-index: 2; }
  .z-3 { z-index: 3; }
  .z-4 { z-index: 4; }
  .z-5 { z-index: 5; }
  .z-999 { z-index: 999; }
  .z-9999 { z-index: 9999; }
  .z-max { z-index: 2147483647; }
  .z-inherit { z-index: inherit; }
  .z-initial { z-index: initial; }
  .z-unset { z-index: unset; }
  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10,
  .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4,
  .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11,
  .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4,
  .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11,
  .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4,
  .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11,
  .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4,
  .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11,
  .col-xl-12, .col-xl, .col-xl-auto { position: relative; width: 100%; min-height: 1px; }
  .col-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
  .col-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
  .col-3 { flex: 0 0 25%; max-width: 25%; }
  .col-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
  .col-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
  .col-6 { flex: 0 0 50%; max-width: 50%; }
  .col-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
  .col-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
  .col-9 { flex: 0 0 75%; max-width: 75%; }
  .col-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
  .col-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
  .col-12 { flex: 0 0 100%; max-width: 100%; }
  @media screen and (min-width: 576px) {
    .pa0-ns { padding: 0; }
    .pa1-ns { padding: .25rem; }
    .pa2-ns { padding: .5rem; }
    .pa3-ns { padding: 1rem; }
    .pa4-ns { padding: 2rem; }
    .pa5-ns { padding: 4rem; }
    .pa6-ns { padding: 8rem; }
    .pa7-ns { padding: 16rem; }
    .pl0-ns { padding-left: 0; }
    .pl1-ns { padding-left: .25rem; }
    .pl2-ns { padding-left: .5rem; }
    .pl3-ns { padding-left: 1rem; }
    .pl4-ns { padding-left: 2rem; }
    .pl5-ns { padding-left: 4rem; }
    .pl6-ns { padding-left: 8rem; }
    .pl7-ns { padding-left: 16rem; }
    .pr0-ns { padding-right: 0; }
    .pr1-ns { padding-right: .25rem; }
    .pr2-ns { padding-right: .5rem; }
    .pr3-ns { padding-right: 1rem; }
    .pr4-ns { padding-right: 2rem; }
    .pr5-ns { padding-right: 4rem; }
    .pr6-ns { padding-right: 8rem; }
    .pr7-ns { padding-right: 16rem; }
    .pb0-ns { padding-bottom: 0; }
    .pb1-ns { padding-bottom: .25rem; }
    .pb2-ns { padding-bottom: .5rem; }
    .pb3-ns { padding-bottom: 1rem; }
    .pb4-ns { padding-bottom: 2rem; }
    .pb5-ns { padding-bottom: 4rem; }
    .pb6-ns { padding-bottom: 8rem; }
    .pb7-ns { padding-bottom: 16rem; }
    .pt0-ns { padding-top: 0; }
    .pt1-ns { padding-top: .25rem; }
    .pt2-ns { padding-top: .5rem; }
    .pt3-ns { padding-top: 1rem; }
    .pt4-ns { padding-top: 2rem; }
    .pt5-ns { padding-top: 4rem; }
    .pt6-ns { padding-top: 8rem; }
    .pt7-ns { padding-top: 16rem; }
    .pv0-ns { padding-top: 0; padding-bottom: 0; }
    .pv1-ns { padding-top: .25rem; padding-bottom: .25rem; }
    .pv2-ns { padding-top: .5rem; padding-bottom: .5rem; }
    .pv3-ns { padding-top: 1rem; padding-bottom: 1rem; }
    .pv4-ns { padding-top: 2rem; padding-bottom: 2rem; }
    .pv5-ns { padding-top: 4rem; padding-bottom: 4rem; }
    .pv6-ns { padding-top: 8rem; padding-bottom: 8rem; }
    .pv7-ns { padding-top: 16rem; padding-bottom: 16rem; }
    .ph0-ns { padding-left: 0; padding-right: 0; }
    .ph1-ns { padding-left: .25rem; padding-right: .25rem; }
    .ph2-ns { padding-left: .5rem; padding-right: .5rem; }
    .ph3-ns { padding-left: 1rem; padding-right: 1rem; }
    .ph4-ns { padding-left: 2rem; padding-right: 2rem; }
    .ph5-ns { padding-left: 4rem; padding-right: 4rem; }
    .ph6-ns { padding-left: 8rem; padding-right: 8rem; }
    .ph7-ns { padding-left: 16rem; padding-right: 16rem; }
    .ma0-ns { margin: 0; }
    .ma1-ns { margin: .25rem; }
    .ma2-ns { margin: .5rem; }
    .ma3-ns { margin: 1rem; }
    .ma4-ns { margin: 2rem; }
    .ma5-ns { margin: 4rem; }
    .ma6-ns { margin: 8rem; }
    .ma7-ns { margin: 16rem; }
    .ml0-ns { margin-left: 0; }
    .ml1-ns { margin-left: .25rem; }
    .ml2-ns { margin-left: .5rem; }
    .ml3-ns { margin-left: 1rem; }
    .ml4-ns { margin-left: 2rem; }
    .ml5-ns { margin-left: 4rem; }
    .ml6-ns { margin-left: 8rem; }
    .ml7-ns { margin-left: 16rem; }
    .mr0-ns { margin-right: 0; }
    .mr1-ns { margin-right: .25rem; }
    .mr2-ns { margin-right: .5rem; }
    .mr3-ns { margin-right: 1rem; }
    .mr4-ns { margin-right: 2rem; }
    .mr5-ns { margin-right: 4rem; }
    .mr6-ns { margin-right: 8rem; }
    .mr7-ns { margin-right: 16rem; }
    .mb0-ns { margin-bottom: 0; }
    .mb1-ns { margin-bottom: .25rem; }
    .mb2-ns { margin-bottom: .5rem; }
    .mb3-ns { margin-bottom: 1rem; }
    .mb4-ns { margin-bottom: 2rem; }
    .mb5-ns { margin-bottom: 4rem; }
    .mb6-ns { margin-bottom: 8rem; }
    .mb7-ns { margin-bottom: 16rem; }
    .mt0-ns { margin-top: 0; }
    .mt1-ns { margin-top: .25rem; }
    .mt2-ns { margin-top: .5rem; }
    .mt3-ns { margin-top: 1rem; }
    .mt4-ns { margin-top: 2rem; }
    .mt5-ns { margin-top: 4rem; }
    .mt6-ns { margin-top: 8rem; }
    .mt7-ns { margin-top: 16rem; }
    .mv0-ns { margin-top: 0; margin-bottom: 0; }
    .mv1-ns { margin-top: .25rem; margin-bottom: .25rem; }
    .mv2-ns { margin-top: .5rem; margin-bottom: .5rem; }
    .mv3-ns { margin-top: 1rem; margin-bottom: 1rem; }
    .mv4-ns { margin-top: 2rem; margin-bottom: 2rem; }
    .mv5-ns { margin-top: 4rem; margin-bottom: 4rem; }
    .mv6-ns { margin-top: 8rem; margin-bottom: 8rem; }
    .mv7-ns { margin-top: 16rem; margin-bottom: 16rem; }
    .mh0-ns { margin-left: 0; margin-right: 0; }
    .mh1-ns { margin-left: .25rem; margin-right: .25rem; }
    .mh2-ns { margin-left: .5rem; margin-right: .5rem; }
    .mh3-ns { margin-left: 1rem; margin-right: 1rem; }
    .mh4-ns { margin-left: 2rem; margin-right: 2rem; }
    .mh5-ns { margin-left: 4rem; margin-right: 4rem; }
    .mh6-ns { margin-left: 8rem; margin-right: 8rem; }
    .mh7-ns { margin-left: 16rem; margin-right: 16rem; }
    .na1-ns { margin: -.25rem; }
    .na2-ns { margin: -.5rem; }
    .na3-ns { margin: -1rem; }
    .na4-ns { margin: -2rem; }
    .na5-ns { margin: -4rem; }
    .na6-ns { margin: -8rem; }
    .na7-ns { margin: -16rem; }
    .nl1-ns { margin-left: -.25rem; }
    .nl2-ns { margin-left: -.5rem; }
    .nl3-ns { margin-left: -1rem; }
    .nl4-ns { margin-left: -2rem; }
    .nl5-ns { margin-left: -4rem; }
    .nl6-ns { margin-left: -8rem; }
    .nl7-ns { margin-left: -16rem; }
    .nr1-ns { margin-right: -.25rem; }
    .nr2-ns { margin-right: -.5rem; }
    .nr3-ns { margin-right: -1rem; }
    .nr4-ns { margin-right: -2rem; }
    .nr5-ns { margin-right: -4rem; }
    .nr6-ns { margin-right: -8rem; }
    .nr7-ns { margin-right: -16rem; }
    .nb1-ns { margin-bottom: -.25rem; }
    .nb2-ns { margin-bottom: -.5rem; }
    .nb3-ns { margin-bottom: -1rem; }
    .nb4-ns { margin-bottom: -2rem; }
    .nb5-ns { margin-bottom: -4rem; }
    .nb6-ns { margin-bottom: -8rem; }
    .nb7-ns { margin-bottom: -16rem; }
    .nt1-ns { margin-top: -.25rem; }
    .nt2-ns { margin-top: -.5rem; }
    .nt3-ns { margin-top: -1rem; }
    .nt4-ns { margin-top: -2rem; }
    .nt5-ns { margin-top: -4rem; }
    .nt6-ns { margin-top: -8rem; }
    .nt7-ns { margin-top: -16rem; }
    .col-sm { flex-basis: 0; flex-grow: 1; max-width: 100%; }
    .col-sm-auto { flex: 0 0 auto; width: auto; max-width: none; }
    .col-sm-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
    .col-sm-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
    .col-sm-3 { flex: 0 0 25%; max-width: 25%; }
    .col-sm-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
    .col-sm-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
    .col-sm-6 { flex: 0 0 50%; max-width: 50%; }
    .col-sm-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
    .col-sm-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
    .col-sm-9 { flex: 0 0 75%; max-width: 75%; }
    .col-sm-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
    .col-sm-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
    .col-sm-12 { flex: 0 0 100%; max-width: 100%; }
  }
  @media screen and (min-width: 768px) {
    .pa0-m { padding: 0; }
    .pa1-m { padding: .25rem; }
    .pa2-m { padding: .5rem; }
    .pa3-m { padding: 1rem; }
    .pa4-m { padding: 2rem; }
    .pa5-m { padding: 4rem; }
    .pa6-m { padding: 8rem; }
    .pa7-m { padding: 16rem; }
    .pl0-m { padding-left: 0; }
    .pl1-m { padding-left: .25rem; }
    .pl2-m { padding-left: .5rem; }
    .pl3-m { padding-left: 1rem; }
    .pl4-m { padding-left: 2rem; }
    .pl5-m { padding-left: 4rem; }
    .pl6-m { padding-left: 8rem; }
    .pl7-m { padding-left: 16rem; }
    .pr0-m { padding-right: 0; }
    .pr1-m { padding-right: .25rem; }
    .pr2-m { padding-right: .5rem; }
    .pr3-m { padding-right: 1rem; }
    .pr4-m { padding-right: 2rem; }
    .pr5-m { padding-right: 4rem; }
    .pr6-m { padding-right: 8rem; }
    .pr7-m { padding-right: 16rem; }
    .pb0-m { padding-bottom: 0; }
    .pb1-m { padding-bottom: .25rem; }
    .pb2-m { padding-bottom: .5rem; }
    .pb3-m { padding-bottom: 1rem; }
    .pb4-m { padding-bottom: 2rem; }
    .pb5-m { padding-bottom: 4rem; }
    .pb6-m { padding-bottom: 8rem; }
    .pb7-m { padding-bottom: 16rem; }
    .pt0-m { padding-top: 0; }
    .pt1-m { padding-top: .25rem; }
    .pt2-m { padding-top: .5rem; }
    .pt3-m { padding-top: 1rem; }
    .pt4-m { padding-top: 2rem; }
    .pt5-m { padding-top: 4rem; }
    .pt6-m { padding-top: 8rem; }
    .pt7-m { padding-top: 16rem; }
    .pv0-m { padding-top: 0; padding-bottom: 0; }
    .pv1-m { padding-top: .25rem; padding-bottom: .25rem; }
    .pv2-m { padding-top: .5rem; padding-bottom: .5rem; }
    .pv3-m { padding-top: 1rem; padding-bottom: 1rem; }
    .pv4-m { padding-top: 2rem; padding-bottom: 2rem; }
    .pv5-m { padding-top: 4rem; padding-bottom: 4rem; }
    .pv6-m { padding-top: 8rem; padding-bottom: 8rem; }
    .pv7-m { padding-top: 16rem; padding-bottom: 16rem; }
    .ph0-m { padding-left: 0; padding-right: 0; }
    .ph1-m { padding-left: .25rem; padding-right: .25rem; }
    .ph2-m { padding-left: .5rem; padding-right: .5rem; }
    .ph3-m { padding-left: 1rem; padding-right: 1rem; }
    .ph4-m { padding-left: 2rem; padding-right: 2rem; }
    .ph5-m { padding-left: 4rem; padding-right: 4rem; }
    .ph6-m { padding-left: 8rem; padding-right: 8rem; }
    .ph7-m { padding-left: 16rem; padding-right: 16rem; }
    .ma0-m { margin: 0; }
    .ma1-m { margin: .25rem; }
    .ma2-m { margin: .5rem; }
    .ma3-m { margin: 1rem; }
    .ma4-m { margin: 2rem; }
    .ma5-m { margin: 4rem; }
    .ma6-m { margin: 8rem; }
    .ma7-m { margin: 16rem; }
    .ml0-m { margin-left: 0; }
    .ml1-m { margin-left: .25rem; }
    .ml2-m { margin-left: .5rem; }
    .ml3-m { margin-left: 1rem; }
    .ml4-m { margin-left: 2rem; }
    .ml5-m { margin-left: 4rem; }
    .ml6-m { margin-left: 8rem; }
    .ml7-m { margin-left: 16rem; }
    .mr0-m { margin-right: 0; }
    .mr1-m { margin-right: .25rem; }
    .mr2-m { margin-right: .5rem; }
    .mr3-m { margin-right: 1rem; }
    .mr4-m { margin-right: 2rem; }
    .mr5-m { margin-right: 4rem; }
    .mr6-m { margin-right: 8rem; }
    .mr7-m { margin-right: 16rem; }
    .mb0-m { margin-bottom: 0; }
    .mb1-m { margin-bottom: .25rem; }
    .mb2-m { margin-bottom: .5rem; }
    .mb3-m { margin-bottom: 1rem; }
    .mb4-m { margin-bottom: 2rem; }
    .mb5-m { margin-bottom: 4rem; }
    .mb6-m { margin-bottom: 8rem; }
    .mb7-m { margin-bottom: 16rem; }
    .mt0-m { margin-top: 0; }
    .mt1-m { margin-top: .25rem; }
    .mt2-m { margin-top: .5rem; }
    .mt3-m { margin-top: 1rem; }
    .mt4-m { margin-top: 2rem; }
    .mt5-m { margin-top: 4rem; }
    .mt6-m { margin-top: 8rem; }
    .mt7-m { margin-top: 16rem; }
    .mv0-m { margin-top: 0; margin-bottom: 0; }
    .mv1-m { margin-top: .25rem; margin-bottom: .25rem; }
    .mv2-m { margin-top: .5rem; margin-bottom: .5rem; }
    .mv3-m { margin-top: 1rem; margin-bottom: 1rem; }
    .mv4-m { margin-top: 2rem; margin-bottom: 2rem; }
    .mv5-m { margin-top: 4rem; margin-bottom: 4rem; }
    .mv6-m { margin-top: 8rem; margin-bottom: 8rem; }
    .mv7-m { margin-top: 16rem; margin-bottom: 16rem; }
    .mh0-m { margin-left: 0; margin-right: 0; }
    .mh1-m { margin-left: .25rem; margin-right: .25rem; }
    .mh2-m { margin-left: .5rem; margin-right: .5rem; }
    .mh3-m { margin-left: 1rem; margin-right: 1rem; }
    .mh4-m { margin-left: 2rem; margin-right: 2rem; }
    .mh5-m { margin-left: 4rem; margin-right: 4rem; }
    .mh6-m { margin-left: 8rem; margin-right: 8rem; }
    .mh7-m { margin-left: 16rem; margin-right: 16rem; }
    .na1-m { margin: -.25rem; }
    .na2-m { margin: -.5rem; }
    .na3-m { margin: -1rem; }
    .na4-m { margin: -2rem; }
    .na5-m { margin: -4rem; }
    .na6-m { margin: -8rem; }
    .na7-m { margin: -16rem; }
    .nl1-m { margin-left: -.25rem; }
    .nl2-m { margin-left: -.5rem; }
    .nl3-m { margin-left: -1rem; }
    .nl4-m { margin-left: -2rem; }
    .nl5-m { margin-left: -4rem; }
    .nl6-m { margin-left: -8rem; }
    .nl7-m { margin-left: -16rem; }
    .nr1-m { margin-right: -.25rem; }
    .nr2-m { margin-right: -.5rem; }
    .nr3-m { margin-right: -1rem; }
    .nr4-m { margin-right: -2rem; }
    .nr5-m { margin-right: -4rem; }
    .nr6-m { margin-right: -8rem; }
    .nr7-m { margin-right: -16rem; }
    .nb1-m { margin-bottom: -.25rem; }
    .nb2-m { margin-bottom: -.5rem; }
    .nb3-m { margin-bottom: -1rem; }
    .nb4-m { margin-bottom: -2rem; }
    .nb5-m { margin-bottom: -4rem; }
    .nb6-m { margin-bottom: -8rem; }
    .nb7-m { margin-bottom: -16rem; }
    .nt1-m { margin-top: -.25rem; }
    .nt2-m { margin-top: -.5rem; }
    .nt3-m { margin-top: -1rem; }
    .nt4-m { margin-top: -2rem; }
    .nt5-m { margin-top: -4rem; }
    .nt6-m { margin-top: -8rem; }
    .nt7-m { margin-top: -16rem; }
    .col-md { flex-basis: 0; flex-grow: 1; max-width: 100%; }
    .col-md-auto { flex: 0 0 auto; width: auto; max-width: none; }
    .col-md-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
    .col-md-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
    .col-md-3 { flex: 0 0 25%; max-width: 25%; }
    .col-md-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
    .col-md-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
    .col-md-6 { flex: 0 0 50%; max-width: 50%; }
    .col-md-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
    .col-md-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
    .col-md-9 { flex: 0 0 75%; max-width: 75%; }
    .col-md-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
    .col-md-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
    .col-md-12 { flex: 0 0 100%; max-width: 100%; }
  }
  @media screen and (min-width: 992px) {
    .pa0-l { padding: 0; }
    .pa1-l { padding: .25rem; }
    .pa2-l { padding: .5rem; }
    .pa3-l { padding: 1rem; }
    .pa4-l { padding: 2rem; }
    .pa5-l { padding: 4rem; }
    .pa6-l { padding: 8rem; }
    .pa7-l { padding: 16rem; }
    .pl0-l { padding-left: 0; }
    .pl1-l { padding-left: .25rem; }
    .pl2-l { padding-left: .5rem; }
    .pl3-l { padding-left: 1rem; }
    .pl4-l { padding-left: 2rem; }
    .pl5-l { padding-left: 4rem; }
    .pl6-l { padding-left: 8rem; }
    .pl7-l { padding-left: 16rem; }
    .pr0-l { padding-right: 0; }
    .pr1-l { padding-right: .25rem; }
    .pr2-l { padding-right: .5rem; }
    .pr3-l { padding-right: 1rem; }
    .pr4-l { padding-right: 2rem; }
    .pr5-l { padding-right: 4rem; }
    .pr6-l { padding-right: 8rem; }
    .pr7-l { padding-right: 16rem; }
    .pb0-l { padding-bottom: 0; }
    .pb1-l { padding-bottom: .25rem; }
    .pb2-l { padding-bottom: .5rem; }
    .pb3-l { padding-bottom: 1rem; }
    .pb4-l { padding-bottom: 2rem; }
    .pb5-l { padding-bottom: 4rem; }
    .pb6-l { padding-bottom: 8rem; }
    .pb7-l { padding-bottom: 16rem; }
    .pt0-l { padding-top: 0; }
    .pt1-l { padding-top: .25rem; }
    .pt2-l { padding-top: .5rem; }
    .pt3-l { padding-top: 1rem; }
    .pt4-l { padding-top: 2rem; }
    .pt5-l { padding-top: 4rem; }
    .pt6-l { padding-top: 8rem; }
    .pt7-l { padding-top: 16rem; }
    .pv0-l { padding-top: 0; padding-bottom: 0; }
    .pv1-l { padding-top: .25rem; padding-bottom: .25rem; }
    .pv2-l { padding-top: .5rem; padding-bottom: .5rem; }
    .pv3-l { padding-top: 1rem; padding-bottom: 1rem; }
    .pv4-l { padding-top: 2rem; padding-bottom: 2rem; }
    .pv5-l { padding-top: 4rem; padding-bottom: 4rem; }
    .pv6-l { padding-top: 8rem; padding-bottom: 8rem; }
    .pv7-l { padding-top: 16rem; padding-bottom: 16rem; }
    .ph0-l { padding-left: 0; padding-right: 0; }
    .ph1-l { padding-left: .25rem; padding-right: .25rem; }
    .ph2-l { padding-left: .5rem; padding-right: .5rem; }
    .ph3-l { padding-left: 1rem; padding-right: 1rem; }
    .ph4-l { padding-left: 2rem; padding-right: 2rem; }
    .ph5-l { padding-left: 4rem; padding-right: 4rem; }
    .ph6-l { padding-left: 8rem; padding-right: 8rem; }
    .ph7-l { padding-left: 16rem; padding-right: 16rem; }
    .ma0-l { margin: 0; }
    .ma1-l { margin: .25rem; }
    .ma2-l { margin: .5rem; }
    .ma3-l { margin: 1rem; }
    .ma4-l { margin: 2rem; }
    .ma5-l { margin: 4rem; }
    .ma6-l { margin: 8rem; }
    .ma7-l { margin: 16rem; }
    .ml0-l { margin-left: 0; }
    .ml1-l { margin-left: .25rem; }
    .ml2-l { margin-left: .5rem; }
    .ml3-l { margin-left: 1rem; }
    .ml4-l { margin-left: 2rem; }
    .ml5-l { margin-left: 4rem; }
    .ml6-l { margin-left: 8rem; }
    .ml7-l { margin-left: 16rem; }
    .mr0-l { margin-right: 0; }
    .mr1-l { margin-right: .25rem; }
    .mr2-l { margin-right: .5rem; }
    .mr3-l { margin-right: 1rem; }
    .mr4-l { margin-right: 2rem; }
    .mr5-l { margin-right: 4rem; }
    .mr6-l { margin-right: 8rem; }
    .mr7-l { margin-right: 16rem; }
    .mb0-l { margin-bottom: 0; }
    .mb1-l { margin-bottom: .25rem; }
    .mb2-l { margin-bottom: .5rem; }
    .mb3-l { margin-bottom: 1rem; }
    .mb4-l { margin-bottom: 2rem; }
    .mb5-l { margin-bottom: 4rem; }
    .mb6-l { margin-bottom: 8rem; }
    .mb7-l { margin-bottom: 16rem; }
    .mt0-l { margin-top: 0; }
    .mt1-l { margin-top: .25rem; }
    .mt2-l { margin-top: .5rem; }
    .mt3-l { margin-top: 1rem; }
    .mt4-l { margin-top: 2rem; }
    .mt5-l { margin-top: 4rem; }
    .mt6-l { margin-top: 8rem; }
    .mt7-l { margin-top: 16rem; }
    .mv0-l { margin-top: 0; margin-bottom: 0; }
    .mv1-l { margin-top: .25rem; margin-bottom: .25rem; }
    .mv2-l { margin-top: .5rem; margin-bottom: .5rem; }
    .mv3-l { margin-top: 1rem; margin-bottom: 1rem; }
    .mv4-l { margin-top: 2rem; margin-bottom: 2rem; }
    .mv5-l { margin-top: 4rem; margin-bottom: 4rem; }
    .mv6-l { margin-top: 8rem; margin-bottom: 8rem; }
    .mv7-l { margin-top: 16rem; margin-bottom: 16rem; }
    .mh0-l { margin-left: 0; margin-right: 0; }
    .mh1-l { margin-left: .25rem; margin-right: .25rem; }
    .mh2-l { margin-left: .5rem; margin-right: .5rem; }
    .mh3-l { margin-left: 1rem; margin-right: 1rem; }
    .mh4-l { margin-left: 2rem; margin-right: 2rem; }
    .mh5-l { margin-left: 4rem; margin-right: 4rem; }
    .mh6-l { margin-left: 8rem; margin-right: 8rem; }
    .mh7-l { margin-left: 16rem; margin-right: 16rem; }
    .na1-l { margin: -.25rem; }
    .na2-l { margin: -.5rem; }
    .na3-l { margin: -1rem; }
    .na4-l { margin: -2rem; }
    .na5-l { margin: -4rem; }
    .na6-l { margin: -8rem; }
    .na7-l { margin: -16rem; }
    .nl1-l { margin-left: -.25rem; }
    .nl2-l { margin-left: -.5rem; }
    .nl3-l { margin-left: -1rem; }
    .nl4-l { margin-left: -2rem; }
    .nl5-l { margin-left: -4rem; }
    .nl6-l { margin-left: -8rem; }
    .nl7-l { margin-left: -16rem; }
    .nr1-l { margin-right: -.25rem; }
    .nr2-l { margin-right: -.5rem; }
    .nr3-l { margin-right: -1rem; }
    .nr4-l { margin-right: -2rem; }
    .nr5-l { margin-right: -4rem; }
    .nr6-l { margin-right: -8rem; }
    .nr7-l { margin-right: -16rem; }
    .nb1-l { margin-bottom: -.25rem; }
    .nb2-l { margin-bottom: -.5rem; }
    .nb3-l { margin-bottom: -1rem; }
    .nb4-l { margin-bottom: -2rem; }
    .nb5-l { margin-bottom: -4rem; }
    .nb6-l { margin-bottom: -8rem; }
    .nb7-l { margin-bottom: -16rem; }
    .nt1-l { margin-top: -.25rem; }
    .nt2-l { margin-top: -.5rem; }
    .nt3-l { margin-top: -1rem; }
    .nt4-l { margin-top: -2rem; }
    .nt5-l { margin-top: -4rem; }
    .nt6-l { margin-top: -8rem; }
    .nt7-l { margin-top: -16rem; }
    .col-lg { flex-basis: 0; flex-grow: 1; max-width: 100%; }
    .col-lg-auto { flex: 0 0 auto; width: auto; max-width: none; }
    .col-lg-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
    .col-lg-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
    .col-lg-3 { flex: 0 0 25%; max-width: 25%; }
    .col-lg-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
    .col-lg-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
    .col-lg-6 { flex: 0 0 50%; max-width: 50%; }
    .col-lg-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
    .col-lg-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
    .col-lg-9 { flex: 0 0 75%; max-width: 75%; }
    .col-lg-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
    .col-lg-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
    .col-lg-12 { flex: 0 0 100%; max-width: 100%; }
  }
  @media screen and (min-width: 1200px) {
    .pa0-l { padding: 0; }
    .pa1-l { padding: .25rem; }
    .pa2-l { padding: .5rem; }
    .pa3-l { padding: 1rem; }
    .pa4-l { padding: 2rem; }
    .pa5-l { padding: 4rem; }
    .pa6-l { padding: 8rem; }
    .pa7-l { padding: 16rem; }
    .pl0-l { padding-left: 0; }
    .pl1-l { padding-left: .25rem; }
    .pl2-l { padding-left: .5rem; }
    .pl3-l { padding-left: 1rem; }
    .pl4-l { padding-left: 2rem; }
    .pl5-l { padding-left: 4rem; }
    .pl6-l { padding-left: 8rem; }
    .pl7-l { padding-left: 16rem; }
    .pr0-l { padding-right: 0; }
    .pr1-l { padding-right: .25rem; }
    .pr2-l { padding-right: .5rem; }
    .pr3-l { padding-right: 1rem; }
    .pr4-l { padding-right: 2rem; }
    .pr5-l { padding-right: 4rem; }
    .pr6-l { padding-right: 8rem; }
    .pr7-l { padding-right: 16rem; }
    .pb0-l { padding-bottom: 0; }
    .pb1-l { padding-bottom: .25rem; }
    .pb2-l { padding-bottom: .5rem; }
    .pb3-l { padding-bottom: 1rem; }
    .pb4-l { padding-bottom: 2rem; }
    .pb5-l { padding-bottom: 4rem; }
    .pb6-l { padding-bottom: 8rem; }
    .pb7-l { padding-bottom: 16rem; }
    .pt0-l { padding-top: 0; }
    .pt1-l { padding-top: .25rem; }
    .pt2-l { padding-top: .5rem; }
    .pt3-l { padding-top: 1rem; }
    .pt4-l { padding-top: 2rem; }
    .pt5-l { padding-top: 4rem; }
    .pt6-l { padding-top: 8rem; }
    .pt7-l { padding-top: 16rem; }
    .pv0-l { padding-top: 0; padding-bottom: 0; }
    .pv1-l { padding-top: .25rem; padding-bottom: .25rem; }
    .pv2-l { padding-top: .5rem; padding-bottom: .5rem; }
    .pv3-l { padding-top: 1rem; padding-bottom: 1rem; }
    .pv4-l { padding-top: 2rem; padding-bottom: 2rem; }
    .pv5-l { padding-top: 4rem; padding-bottom: 4rem; }
    .pv6-l { padding-top: 8rem; padding-bottom: 8rem; }
    .pv7-l { padding-top: 16rem; padding-bottom: 16rem; }
    .ph0-l { padding-left: 0; padding-right: 0; }
    .ph1-l { padding-left: .25rem; padding-right: .25rem; }
    .ph2-l { padding-left: .5rem; padding-right: .5rem; }
    .ph3-l { padding-left: 1rem; padding-right: 1rem; }
    .ph4-l { padding-left: 2rem; padding-right: 2rem; }
    .ph5-l { padding-left: 4rem; padding-right: 4rem; }
    .ph6-l { padding-left: 8rem; padding-right: 8rem; }
    .ph7-l { padding-left: 16rem; padding-right: 16rem; }
    .ma0-l { margin: 0; }
    .ma1-l { margin: .25rem; }
    .ma2-l { margin: .5rem; }
    .ma3-l { margin: 1rem; }
    .ma4-l { margin: 2rem; }
    .ma5-l { margin: 4rem; }
    .ma6-l { margin: 8rem; }
    .ma7-l { margin: 16rem; }
    .ml0-l { margin-left: 0; }
    .ml1-l { margin-left: .25rem; }
    .ml2-l { margin-left: .5rem; }
    .ml3-l { margin-left: 1rem; }
    .ml4-l { margin-left: 2rem; }
    .ml5-l { margin-left: 4rem; }
    .ml6-l { margin-left: 8rem; }
    .ml7-l { margin-left: 16rem; }
    .mr0-l { margin-right: 0; }
    .mr1-l { margin-right: .25rem; }
    .mr2-l { margin-right: .5rem; }
    .mr3-l { margin-right: 1rem; }
    .mr4-l { margin-right: 2rem; }
    .mr5-l { margin-right: 4rem; }
    .mr6-l { margin-right: 8rem; }
    .mr7-l { margin-right: 16rem; }
    .mb0-l { margin-bottom: 0; }
    .mb1-l { margin-bottom: .25rem; }
    .mb2-l { margin-bottom: .5rem; }
    .mb3-l { margin-bottom: 1rem; }
    .mb4-l { margin-bottom: 2rem; }
    .mb5-l { margin-bottom: 4rem; }
    .mb6-l { margin-bottom: 8rem; }
    .mb7-l { margin-bottom: 16rem; }
    .mt0-l { margin-top: 0; }
    .mt1-l { margin-top: .25rem; }
    .mt2-l { margin-top: .5rem; }
    .mt3-l { margin-top: 1rem; }
    .mt4-l { margin-top: 2rem; }
    .mt5-l { margin-top: 4rem; }
    .mt6-l { margin-top: 8rem; }
    .mt7-l { margin-top: 16rem; }
    .mv0-l { margin-top: 0; margin-bottom: 0; }
    .mv1-l { margin-top: .25rem; margin-bottom: .25rem; }
    .mv2-l { margin-top: .5rem; margin-bottom: .5rem; }
    .mv3-l { margin-top: 1rem; margin-bottom: 1rem; }
    .mv4-l { margin-top: 2rem; margin-bottom: 2rem; }
    .mv5-l { margin-top: 4rem; margin-bottom: 4rem; }
    .mv6-l { margin-top: 8rem; margin-bottom: 8rem; }
    .mv7-l { margin-top: 16rem; margin-bottom: 16rem; }
    .mh0-l { margin-left: 0; margin-right: 0; }
    .mh1-l { margin-left: .25rem; margin-right: .25rem; }
    .mh2-l { margin-left: .5rem; margin-right: .5rem; }
    .mh3-l { margin-left: 1rem; margin-right: 1rem; }
    .mh4-l { margin-left: 2rem; margin-right: 2rem; }
    .mh5-l { margin-left: 4rem; margin-right: 4rem; }
    .mh6-l { margin-left: 8rem; margin-right: 8rem; }
    .mh7-l { margin-left: 16rem; margin-right: 16rem; }
    .col-xl { flex-basis: 0; flex-grow: 1; max-width: 100%; }
    .col-xl-auto { flex: 0 0 auto; width: auto; max-width: none; }
    .col-xl-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
    .col-xl-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
    .col-xl-3 { flex: 0 0 25%; max-width: 25%; }
    .col-xl-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
    .col-xl-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
    .col-xl-6 { flex: 0 0 50%; max-width: 50%; }
    .col-xl-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
    .col-xl-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
    .col-xl-9 { flex: 0 0 75%; max-width: 75%; }
    .col-xl-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
    .col-xl-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
    .col-xl-12 { flex: 0 0 100%; max-width: 100%; }
  }
`;

export default tachyons;
