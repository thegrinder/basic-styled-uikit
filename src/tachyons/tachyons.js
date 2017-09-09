import { css } from 'styled-components';

const tachyons = css`
  .ba { border-style: solid; border-width: 1px; }
  .bt { border-top-style: solid; border-top-width: 1px; }
  .br { border-right-style: solid; border-right-width: 1px; }
  .bb { border-bottom-style: solid; border-bottom-width: 1px; }
  .bl { border-left-style: solid; border-left-width: 1px; }
  .bn { border-style: none; border-width: 0; };

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

  .di { display: inline; }
  .db { display: block; }
  .dib { display: inline-block; }

  .flex { display: flex; }
  .inline-flex { display: inline-flex; }
  .flex-auto { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }
  .flex-none { flex: none; }
  .flex-column { flex-direction: column; }
  .flex-row { flex-direction: row; }
  .flex-wrap { flex-wrap: wrap; }
  .flex-nowrap { flex-wrap: nowrap; }
  .flex-wrap-reverse { flex-wrap: wrap-reverse; }
  .flex-column-reverse { flex-direction: column-reverse; }
  .flex-row-reverse { flex-direction: row-reverse; }
  .items-start { align-items: flex-start; }
  .items-end { align-items: flex-end; }
  .items-center { align-items: center; }
  .items-baseline { align-items: baseline; }
  .items-stretch { align-items: stretch; }
  .self-start { align-self: flex-start; }
  .self-end { align-self: flex-end; }
  .self-center { align-self: center; }
  .self-baseline { align-self: baseline; }
  .self-stretch { align-self: stretch; }
  .justify-start { justify-content: flex-start; }
  .justify-end { justify-content: flex-end; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .content-start { align-content: flex-start; }
  .content-end { align-content: flex-end; }
  .content-center { align-content: center; }
  .content-between { align-content: space-between; }
  .content-around { align-content: space-around; }
  .content-stretch { align-content: stretch; }

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

  .lh-solid { line-height: 1; }
  .lh-title { line-height: 1.25; }
  .lh-copy { line-height: 1.5; }

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

  .tl { text-align: left; }
  .tr { text-align: right; }
  .tc { text-align: center; }
  .tj { text-align: justify; }

  .ttc { text-transform: capitalize; }
  .ttl { text-transform: lowercase; }
  .ttu { text-transform: uppercase; }
  .ttn { text-transform: none; }

  .truncate-ns { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .mr-auto { margin-right: auto; }
  .ml-auto { margin-left: auto; }

  .z-0 { z-index: 0; }
  .z-1 { z-index: 1; }
  .z-2 { z-index: 2; }
  .z-3 { z-index: 3; }
  .z-4 { z-index: 4; }
  .z-5 { z-index: 5; }
  .z-999 { z-index: 999; }
  .z-9999 { z-index: 9999; }
  .z-max { z-index: 2147483647; }

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

  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
  .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
  .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
  .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
  .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
  .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
  }

  .col-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 576px) {
    .col-sm {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-sm-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-sm-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-sm-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-sm-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-sm-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-sm-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-sm-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-sm-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-md-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-md-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-md-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-md-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-md-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-lg-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-lg-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-lg-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-lg-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-lg-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-lg-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-lg-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-xl-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-xl-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-xl-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-xl-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-xl-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-xl-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
}
`;

export default tachyons;
