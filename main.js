(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1Nvw":function(e,t,o){"use strict";(function(e){o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return d})),o.d(t,"d",(function(){return f})),o.d(t,"b",(function(){return b}));var r,a=o("1p3o");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const n=(e,t)=>t*(a.b[e.stockCode]?a.b[e.stockCode]:1),s=e=>[...e].sort((e,t)=>n(e,e.sellingRatio)-n(t,t.sellingRatio))[0],c=e=>[...e].sort((e,t)=>n(t,t.buyingRatio)-n(e,e.buyingRatio))[0],l=(e,t)=>Math.round(100*(e-t))/100,u=(e=0,t=0,o=5)=>{const r=100*Math.floor(t/e/100);if(r<=0)return 0;return t<r*e*(1+o/1e4)?r-100:r},i=(e,t)=>{const o=c(e);return{value:l(o.buyingRatio,t.sellingRatio),compareWith:{stockCode:o.stockCode,stockName:o.name,ratio:o.buyingRatio,price:o.buyingAt}}},d=(e=[{code:"",buyingAt:0,buyingRatio:0,sellingAt:0,sellingRatio:0}],t=0)=>{const o=s(e);return{...i(e,o),toBuy:{stockCode:o.stockCode,stockName:o.name,price:o.sellingAt,maxAmount:u(o.sellingAt,t)},timestamp:(new Date).getTime()}},f=(e,t)=>{const o=s(e);return{value:l(t.buyingRatio,o.sellingRatio),compareWith:{stockCode:o.stockCode,stockName:o.name,ratio:o.buyingRatio,price:o.buyingAt}}},b=(e=[{code:"",buyingAt:0,buyingRatio:0,sellingAt:0,sellingRatio:0}],t=[{stockCode:"",sellableAmount:0}])=>{const o=t.filter(e=>e.sellableAmount>0).reduce((e,t)=>(e[t.stockCode]=t.sellableAmount,e),{}),r=e.filter(e=>Object.keys(o).includes(e.stockCode)),a=c(r);if(!a)return null;return{...f(e,a),toSell:{stockCode:a.stockCode,stockName:a.name,price:a.buyingAt,maxAmount:o[a.stockCode]},timestamp:(new Date).getTime()}};var p,y;(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(n,"getFixedRatio","/home/runner/work/stock-eye/stock-eye/source/src/website/services/gapService.js"),p.register(s,"getStockWithMinSellingRatio","/home/runner/work/stock-eye/stock-eye/source/src/website/services/gapService.js"),p.register(c,"getStockWithMaxBuyingRatio","/home/runner/work/stock-eye/stock-eye/source/src/website/services/gapService.js"),p.register(l,"getGapBetween","/home/runner/work/stock-eye/stock-eye/source/src/website/services/gapService.js"),p.register(u,"cutoffAmount","/home/runner/work/stock-eye/stock-eye/source/src/website/services/gapService.js"),p.register(i,"getBuyGap","/home/runner/work/stock-eye/stock-eye/source/src/website/services/gapService.js"),p.register(d,"calcBuyingGap","/home/runner/work/stock-eye/stock-eye/source/src/website/services/gapService.js"),p.register(f,"getSellGap","/home/runner/work/stock-eye/stock-eye/source/src/website/services/gapService.js"),p.register(b,"calcSellingGap","/home/runner/work/stock-eye/stock-eye/source/src/website/services/gapService.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,o("3UD+")(e))},"1p3o":function(e,t,o){"use strict";(function(e){var r;o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return n})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a={sh601328:1.5},n={"深银":{threshold:2,lookBackDays:1,stocks:["sz000001","sz002142"]},"沪银":{threshold:2,lookBackDays:2,stocks:["sh601398","sh601988","sh601288","sh601939","sh601328","sh600036"]}},s=Object.values(n).reduce((e,t)=>e.concat(t.stocks),[]);var c,l;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(a,"ZOOM","/home/runner/work/stock-eye/stock-eye/source/src/website/settings.js"),c.register(n,"STOCK_GROUPS","/home/runner/work/stock-eye/stock-eye/source/src/website/settings.js"),c.register(s,"STOCK_CODES","/home/runner/work/stock-eye/stock-eye/source/src/website/settings.js"),c.register("","HOLDING_NEW_STOCK","/home/runner/work/stock-eye/stock-eye/source/src/website/settings.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,o("3UD+")(e))},"2v45":function(e,t,o){"use strict";(function(e){o.d(t,"b",(function(){return d})),o.d(t,"a",(function(){return f}));var r,a=o("q1tI"),n=o.n(a),s=o("17x9"),c=o("FKWp"),l=o("3YF/"),u=o("jjvw");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const d=n.a.createContext(null),f=({children:e})=>{const t=Object(c.a)(),o=Object(l.a)(t),r=Object(u.a)();return n.a.createElement(d.Provider,{value:{groups:t,quotes:o,alarm:r}},e)};var b,p;i(f,"useSettings{groups}\nuseQuotes{quotes}\nuseAlarm{alarm}",()=>[c.a,l.a,u.a]),f.propTypes={children:s.node},f.defaultProps={children:null},(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(d,"StoreContext","/home/runner/work/stock-eye/stock-eye/source/src/website/contexts.jsx"),b.register(f,"ContextProvider","/home/runner/work/stock-eye/stock-eye/source/src/website/contexts.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,o("3UD+")(e))},"3SIN":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("17x9"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}render(){const{children:e}=this.props,{error:t,errorInfo:o}=this.state;return t?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{whiteSpace:"pre-wrap"}},t&&t.toString(),o.componentStack):e}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}ErrorBoundary.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1__.node},ErrorBoundary.defaultProps={children:void 0};const _default=ErrorBoundary;var reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ErrorBoundary,"ErrorBoundary","/home/runner/work/stock-eye/stock-eye/source/src/website/components/ErrorBoundary.jsx"),reactHotLoader.register(_default,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/components/ErrorBoundary.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("3UD+")(module))},"3YF/":function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o("k7EV"),s=o("xlw7"),c=o("M63F"),l=o("G8Pw"),u=o("1Nvw");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};function d(e,t){return Math.round(1e4*(e/t-1))/100}function f(e){let t=new Date;return Array.from({length:e}).forEach(()=>{t=Object(c.b)(t)}),t}async function b(e={stocks:["sz000001"],lookBackDays:1,DEFAULT:!0}){if(e.DEFAULT)return;const t=Object(n.b)(await Object(s.a)(e.stocks),"stockCode"),o=f(e.lookBackDays),r=await Promise.all(e.stocks.map(async e=>{const r=await Object(s.b)(e,o),a=t[e],n=d(a.current,a.closeAt),c=r.close,l=d(a.current,c),u=d(a.buyingAt,c),i=d(a.sellingAt,c);return{...a,currentRatio:n,baseAt:c,baseRatio:l,buyingRatio:u,sellingRatio:i}}));return r.forEach(e=>{Object.assign(e,{buyGap:Object(u.c)(r,e),sellGap:Object(u.d)(r,e)})}),r}const p=(e={})=>{const[t,o]=Object(a.useState)(),r=Object(a.useCallback)(async()=>{const t=await Promise.all(Object.entries(e).map(async([e,t])=>({groupName:e,groupQuotes:await b(t)})));o(t)},[e]);return Object(a.useEffect)(()=>Object(l.a)({interval:3,runOnStartUp:!0})(r),[r,e]),t};var y,m;i(p,"useState{[quotes, setQuotes]}\nuseCallback{fetch}\nuseEffect{}"),t.a=p,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(d,"calcRatio","/home/runner/work/stock-eye/stock-eye/source/src/website/services/useQuotes.js"),y.register(f,"getLastTradeDay","/home/runner/work/stock-eye/stock-eye/source/src/website/services/useQuotes.js"),y.register(b,"getQuotesInGroup","/home/runner/work/stock-eye/stock-eye/source/src/website/services/useQuotes.js"),y.register(p,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/services/useQuotes.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,o("3UD+")(e))},"6Q30":function(e,t,o){"use strict";(function(e){var r;o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return c})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var a,n;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;async function s(e){return(await fetch("https://w68lqh1j90.execute-api.ap-southeast-2.amazonaws.com/prod/current_quotes?stockCodes="+e.join(","))).json()}async function c(e,t){const o=`https://w68lqh1j90.execute-api.ap-southeast-2.amazonaws.com/prod/history_quotes?stockCode=${e}&date=${t.toISOString().substring(0,10)}`,r=await caches.open("stock-eye");let a=await r.match(o);return a||(await r.add(o),a=await r.match(o)),a.json()}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(a.register(s,"fetchCurrentQuotes","/home/runner/work/stock-eye/stock-eye/source/src/website/apis/awsApi.js"),a.register(c,"fetchHistoryQuote","/home/runner/work/stock-eye/stock-eye/source/src/website/apis/awsApi.js")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,o("3UD+")(e))},DGeA:function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o.n(a),s=o("17x9"),c=o("vOnD"),l=o("p+jJ"),u=o("kV8f");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const i={className:s.string,quotes:Object(s.arrayOf)(Object(s.shape)({name:s.string,price:s.number,currentRatio:s.number})),onWatch:s.func,stockCodeInWatch:s.string,groupName:s.string},d={className:null,quotes:[],onWatch:void 0,stockCodeInWatch:void 0,groupName:void 0},f=({current:e,previous:t,ratio:o})=>{const r=(1e3*e-1e3*t)/1e3;return n.a.createElement(u.a,{value:r,rate:o})};f.propTypes={current:s.number.isRequired,previous:s.number.isRequired,ratio:s.number.isRequired};const b=({className:e,groupName:t,quotes:o,onWatch:r,stockCodeInWatch:a})=>n.a.createElement("table",{className:e},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,t),n.a.createElement("th",null,"现价"),n.a.createElement("th",null,"今日涨跌"),n.a.createElement("th",null,"参考价"),n.a.createElement("th",null,"参考涨跌"),n.a.createElement("th",null,"买进GAP"),n.a.createElement("th",null,"卖出GAP"),n.a.createElement("th",{"aria-label":"commands"}))),n.a.createElement("tbody",null,o.map(e=>n.a.createElement("tr",{key:e.name},n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.current.toFixed(2)),n.a.createElement("td",null,n.a.createElement(f,{current:e.current,previous:e.closeAt,ratio:e.currentRatio})),n.a.createElement("td",null,e.baseAt.toFixed(2)),n.a.createElement("td",null,n.a.createElement(f,{current:e.current,previous:e.baseAt,ratio:e.baseRatio})),n.a.createElement("td",null,e.buyGap.value),n.a.createElement("td",null,e.sellGap.value),n.a.createElement("td",null,(e=>n.a.createElement(l.a,{type:e.stockCode===a?"primary":"default",onClick:()=>r&&r({target:{value:e.stockCode}})},"visibility"))(e))))));b.propTypes=i,b.defaultProps=d;const p=Object(c.b)(b)`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: solid 1px var(--border-color);
  }

  th,
  td {
    padding: var(--size-1);

    &:nth-child(1) {
      text-align: center;
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
      text-align: right;
    }
  }
`;var y,m;t.a=p,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(i,"propTypes","/home/runner/work/stock-eye/stock-eye/source/src/website/components/Quotes.jsx"),y.register(d,"defaultProps","/home/runner/work/stock-eye/stock-eye/source/src/website/components/Quotes.jsx"),y.register(f,"StockChange","/home/runner/work/stock-eye/stock-eye/source/src/website/components/Quotes.jsx"),y.register(b,"Quotes","/home/runner/work/stock-eye/stock-eye/source/src/website/components/Quotes.jsx"),y.register(p,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/components/Quotes.jsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,o("3UD+")(e))},"Ej+v":function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o.n(a),s=o("17x9"),c=o("0cfB"),l=o("vOnD"),u=o("YWC6"),i=o("uIXj"),d=o("2v45");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const f=({className:e})=>n.a.createElement(u.b,null,n.a.createElement(d.a,null,n.a.createElement(i.a,null),n.a.createElement("main",{className:e},n.a.createElement("article",null,n.a.createElement(u.a,null),n.a.createElement(u.c,null)),n.a.createElement("aside",null,n.a.createElement(u.d,null)),n.a.createElement(u.e,null))));f.propTypes={className:s.string},f.defaultProps={className:null};const b=Object(c.hot)(e)(Object(l.b)(f)`
  display: flex;
  min-height: 100vh;

  article {
    flex: 1;
  }

  aside {
    width: auto;
    background: #1e1e1d;
  }
`);var p,y;t.a=b,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(f,"App","/home/runner/work/stock-eye/stock-eye/source/src/website/App.jsx"),p.register(b,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/App.jsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,o("3UD+")(e))},FKWp:function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o("1p3o");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const c=()=>{const[e,t]=Object(a.useState)();return Object(a.useEffect)(()=>{t(n.a)},[]),e};var l,u;s(c,"useState{[stockGroups, setStockGroups]}\nuseEffect{}"),t.a=c,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(c,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/services/useSettings.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,o("3UD+")(e))},G8Pw:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return s}));var r,a=o("M63F"),n=o("gwhG");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=({interval:e=1,runOnStartUp:t=!0})=>{let o=!1,r=!1;return function s(c){return r?null:((async()=>{try{(t&&!o||Object(a.a)())&&(o=!0,await c())}catch(e){console.error(e),Object(n.a)({title:e.message})}finally{await Object(a.c)(e),s(c)}})(),()=>{r=!0})}};var c,l;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&c.register(s,"runDuringTradeTime","/home/runner/work/stock-eye/stock-eye/source/src/website/services/schedule.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,o("3UD+")(e))},M63F:function(e,t,o){"use strict";(function(e){var r;o.d(t,"a",(function(){return l})),o.d(t,"c",(function(){return u})),o.d(t,"b",(function(){return i})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=(e,t)=>60*parseInt(e,10)+parseInt(t,10),n=(e,...t)=>t.some(t=>{const[,...o]=t.match(/(\d+):(\d+)-(\d+):(\d+)/)||[];return e>=a(o[0],o[1])&&e<=a(o[2],o[3])}),s=["2017-10-2","2017-10-3","2017-10-4","2017-10-5","2017-10-6","2019-2-4","2019-2-5","2019-2-6","2019-2-7","2019-2-8","2019-4-5","2019-5-1","2019-5-2","2019-5-3","2020-1-1","2020-1-24","2020-1-27","2020-1-28","2020-1-29","2020-1-30"].map(e=>new Date(e)),c=e=>{const t=e.getDay();if(0===t||6===t)return!1;return!s.some(t=>{return r=e,(o=t).getFullYear()===r.getFullYear()&&o.getMonth()===r.getMonth()&&o.getDate()===r.getDate();var o,r})},l=(e=new Date)=>{if(!c(e))return!1;const t=a(e.getHours(),e.getMinutes());return n(t,"11:15-13:30","15:00-17:00")},u=async e=>new Promise(t=>setTimeout(t,1e3*e)),i=(e=new Date)=>{const t=e;do{t.setDate(t.getDate()-1)}while(!c(t));return t};var d,f;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(a,"totalMinutes","/home/runner/work/stock-eye/stock-eye/source/src/website/services/time.js"),d.register(n,"isTimeInAnyTimeSlots","/home/runner/work/stock-eye/stock-eye/source/src/website/services/time.js"),d.register(s,"publicHolidays","/home/runner/work/stock-eye/stock-eye/source/src/website/services/time.js"),d.register(c,"isTradeDay","/home/runner/work/stock-eye/stock-eye/source/src/website/services/time.js"),d.register(l,"isTradeTime","/home/runner/work/stock-eye/stock-eye/source/src/website/services/time.js"),d.register(u,"sleep","/home/runner/work/stock-eye/stock-eye/source/src/website/services/time.js"),d.register(i,"lastTradeDay","/home/runner/work/stock-eye/stock-eye/source/src/website/services/time.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,o("3UD+")(e))},O0a5:function(e,t,o){"use strict";(function(e){var r,a=o("vOnD");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const n=a.b.span`
  color: var(${e=>/^\s*-/.test(e.children)?"--green":"--red"});
`,s=n;var c,l;t.a=s,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(n,"Number","/home/runner/work/stock-eye/stock-eye/source/src/website/components/Number.jsx"),c.register(s,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/components/Number.jsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,o("3UD+")(e))},QmCO:function(e,t,o){"use strict";o.r(t);var r=o("q1tI"),a=o.n(r),n=o("i8i4"),s=o("Ej+v");"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;document.addEventListener("DOMContentLoaded",()=>{Object(n.render)(a.a.createElement(s.a,null),document.getElementById("root"))})},S1q7:function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o.n(a),s=o("17x9"),c=o("vOnD"),l=o("O0a5");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const u=({className:e,quotes:t})=>n.a.createElement("ul",{className:e},t.map(e=>n.a.createElement("li",{key:e.name},n.a.createElement("span",{className:"title"},e.name.match(/[^A-Z]/)[0]),n.a.createElement(l.a,null,e.currentRatio.toFixed(2)+"%"))));u.propTypes={className:s.string,quotes:Object(s.arrayOf)(Object(s.shape)({name:s.string,price:s.number,currentRatio:s.number}))},u.defaultProps={className:null,quotes:[]};const i=Object(c.b)(u)`
  opacity: 0.8;
  list-style: none;
  padding: 0;

  li {
    padding: var(--size-1);
    border-bottom: solid 1px var(--border-color);

    .title {
      color: #808080;
      margin-right: var(--size-half);
    }
  }
`;var d,f;t.a=i,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(u,"Quotes","/home/runner/work/stock-eye/stock-eye/source/src/website/components/LiteQuotes.jsx"),d.register(i,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/components/LiteQuotes.jsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,o("3UD+")(e))},SyQv:function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o.n(a),s=o("iUQo"),c=o("2v45"),l=o("gwhG");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const i=({groupName:e="",gap:t=0,trade:o="",stock:r="",price:a=0,additional:n=""})=>{const s=`${e}组合价差${t}%`,c=`${o} ${r} ${a} ${n}`;Object(l.a)({title:s,body:c})},d=()=>{const e=Object(a.useContext)(c.b);return Object(s.b)(e).filter(({groupName:e})=>"深银"===e).forEach(({groupName:e,buyingGap:t,sellingGap:o,threshold:r})=>{t&&t.value>=r&&i({groupName:e,gap:t.value,trade:"买",stock:t.toBuy.stockName,price:t.toBuy.price,additional:`相比${t.compareWith.stockName} ${t.compareWith.price}`}),o&&o.value>=r&&i({groupName:e,gap:o.value,trade:"卖",stock:o.toSell.stockName,price:o.toSell.price,additional:`相比${o.compareWith.stockName} ${o.compareWith.price}`})}),null};u(d,"useContext{store}");const f=()=>{const{alarm:e}=Object(a.useContext)(c.b);return"on"===e.status?n.a.createElement(d,null):null};u(f,"useContext{{ alarm }}");const b=f;var p,y;t.a=b,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(i,"sendTradeSignal","/home/runner/work/stock-eye/stock-eye/source/src/website/components/TradeSuggestion.jsx"),p.register(d,"TradeSuggestion","/home/runner/work/stock-eye/stock-eye/source/src/website/components/TradeSuggestion.jsx"),p.register(f,"WithContext","/home/runner/work/stock-eye/stock-eye/source/src/website/components/TradeSuggestion.jsx"),p.register(b,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/components/TradeSuggestion.jsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,o("3UD+")(e))},YWC6:function(e,t,o){"use strict";var r=o("oqBo");o.d(t,"c",(function(){return r.a}));var a=o("paYp");o.d(t,"d",(function(){return a.a}));var n=o("SyQv");o.d(t,"e",(function(){return n.a}));var s=o("3SIN");o.d(t,"b",(function(){return s.a}));o("p+jJ");var c=o("fGR6");o.d(t,"a",(function(){return c.a}));"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature},fGR6:function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o.n(a),s=o("17x9"),c=o("p+jJ"),l=o("2v45");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const i=({status:e,onChange:t})=>n.a.createElement(c.a,{type:"on"===e?"primary":"default",onClick:()=>{t&&t({target:{value:"on"===e?"off":"on"}})}},"alarm_"+e);i.propTypes={onChange:s.func,status:s.string},i.defaultProps={onChange:void 0,status:"on"};const d=()=>{const{alarm:e}=Object(a.useContext)(l.b);return n.a.createElement(i,{status:e.status,onChange:t=>e.setStatus(t.target.value)})};u(d,"useContext{{ alarm }}");const f=d;var b,p;t.a=f,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(i,"AlarmControl","/home/runner/work/stock-eye/stock-eye/source/src/website/components/AlarmControl.jsx"),b.register(d,"WithContext","/home/runner/work/stock-eye/stock-eye/source/src/website/components/AlarmControl.jsx"),b.register(f,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/components/AlarmControl.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,o("3UD+")(e))},gwhG:function(e,t,o){"use strict";(function(e){var r;o.d(t,"a",(function(){return s})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var a,n;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;async function s(e){"Notification"in window&&("default"===Notification.permission&&await Notification.requestPermission(),"granted"===Notification.permission&&new Notification(e.title,e))}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(s,"sendNotification","/home/runner/work/stock-eye/stock-eye/source/src/website/notification.ts"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,o("3UD+")(e))},iUQo:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return c}));var r,a=o("G4qV"),n=o("1Nvw");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=Object(a.a)(e=>e.quotes,(e=[])=>e.reduce((e,t)=>e.concat(t.groupQuotes),[])),c=Object(a.a)(e=>e.groups,e=>e.quotes,(e,t=[])=>t.map(t=>({groupName:t.groupName,buyingGap:Object(n.a)(t.groupQuotes),sellingGap:Object(n.b)(t.groupQuotes),threshold:e[t.groupName].threshold})));var l,u;(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(s,"allQuotesSelector","/home/runner/work/stock-eye/stock-eye/source/src/website/services/selectors.js"),l.register(c,"suggestionsSelector","/home/runner/work/stock-eye/stock-eye/source/src/website/services/selectors.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,o("3UD+")(e))},jjvw:function(e,t,o){"use strict";(function(e){var r,a=o("q1tI");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const s=()=>{const[e,t]=Object(a.useState)("on");return{status:e,setStatus:t}};var c,l;n(s,"useState{[status, setStatus]('on')}"),t.a=s,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&c.register(s,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/services/useAlarm.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,o("3UD+")(e))},k7EV:function(e,t,o){"use strict";(function(e){var r;o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return u})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var a,n;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function s(e){return e.filter(e=>e&&""!==e.trim())}function c(e){return e.join(" ")}function l(...e){return c(s(e))}function u(e,t){return e.reduce((e,o)=>Object.assign(e,{[o[t]]:o}),{})}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(a.register(s,"filterNames","/home/runner/work/stock-eye/stock-eye/source/src/website/services/util.ts"),a.register(c,"joinNames","/home/runner/work/stock-eye/stock-eye/source/src/website/services/util.ts"),a.register(l,"classNames","/home/runner/work/stock-eye/stock-eye/source/src/website/services/util.ts"),a.register(u,"keyBy","/home/runner/work/stock-eye/stock-eye/source/src/website/services/util.ts")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,o("3UD+")(e))},kV8f:function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o.n(a),s=o("17x9"),c=o("vOnD");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const l=e=>Math.sign(e),u=({className:e,value:t,rate:o})=>{if(null===t)return null;const r=l(t)>=0?"+":"",a="string"==typeof o?o:o.toFixed(2)+"%";return n.a.createElement("span",{className:e},`${t.toFixed(2)} (${r}${a})`)};u.propTypes={className:s.string,value:s.number,rate:Object(s.oneOfType)([s.string,s.number])},u.defaultProps={className:null,value:null,rate:null};const i=Object(c.b)(u)`
  color: var(${e=>l(e.value)>=0?"--red":"--green"});
`;var d,f;t.a=i,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(l,"sign","/home/runner/work/stock-eye/stock-eye/source/src/website/components/NumberRate.jsx"),d.register(u,"NumberRate","/home/runner/work/stock-eye/stock-eye/source/src/website/components/NumberRate.jsx"),d.register(i,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/components/NumberRate.jsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,o("3UD+")(e))},oqBo:function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o.n(a),s=o("DGeA"),c=o("2v45"),l=o("iUQo");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const i=()=>{const[e,t]=Object(a.useState)(),o=Object(a.useContext)(c.b);Object(a.useEffect)(()=>{if(e){const t=Object(l.a)(o).find(({stockCode:t})=>t===e);t&&(document.title=`${t.name.substr(0,1)} ${t.current} (${t.currentRatio.toFixed(2)}%)`)}});const r=e=>{t(e.target.value)};return o.quotes?o.quotes.map(({groupName:t,groupQuotes:o})=>n.a.createElement(s.a,{key:t,groupName:t,quotes:o,onWatch:r,stockCodeInWatch:e})):null};u(i,"useState{[stockCodeInWatch, setStockCodeInWatch]}\nuseContext{store}\nuseEffect{}");const d=i;var f,b;t.a=d,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(i,"Hq","/home/runner/work/stock-eye/stock-eye/source/src/website/components/Hq.jsx"),f.register(d,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/components/Hq.jsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,o("3UD+")(e))},"p+jJ":function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o.n(a),s=o("17x9"),c=o("vOnD"),l=o("k7EV");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const i=({className:e,children:t,type:o,...r})=>n.a.createElement("button",u({type:"button",className:Object(l.a)("material-icons",e)},r),t);i.propTypes={className:s.string,children:s.node,type:Object(s.oneOf)(["primary","default"])},i.defaultProps={className:void 0,children:void 0,type:"default"};const d=Object(c.b)(i)`
  border: 1px solid transparent;
  border-color: var(--border-color);
  outline: none;
  padding: 0;
  border-radius: 50%;
  font-size: var(--size-2);
  height: var(--size-3);
  width: var(--size-3);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${({type:e})=>"primary"===e&&"\n    color: var(--primary-color);\n    background: var(--primary-bg-color);\n    border-color: var(--primary-bg-color);\n  "}

  &:hover {
    color: var(--hover-color);
    background: transparent;
    border-color: var(--hover-color);
  }
`;var f,b;t.a=d,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(i,"IconButton","/home/runner/work/stock-eye/stock-eye/source/src/website/components/IconButton.jsx"),f.register(d,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/components/IconButton.jsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,o("3UD+")(e))},paYp:function(e,t,o){"use strict";(function(e){var r,a=o("q1tI"),n=o.n(a),s=o("S1q7"),c=o("2v45"),l=o("iUQo");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const i=()=>{const e=Object(a.useContext)(c.b),t=Object(l.a)(e);return n.a.createElement(s.a,{quotes:t})};u(i,"useContext{store}");const d=i;var f,b;t.a=d,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(i,"LiteHq","/home/runner/work/stock-eye/stock-eye/source/src/website/components/LiteHq.jsx"),f.register(d,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/components/LiteHq.jsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,o("3UD+")(e))},uIXj:function(e,t,o){"use strict";(function(e){var r,a=o("vOnD");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const n=a.a`
  :root {
    --red: #c10;
    --green: #383;
    --primary-color: #fff;
    --primary-bg-color: #1890ff;
    --border-color: #d9d9d9;
    --hover-color: #40a9ff;
    --size-1: 8px;
    --size-half: calc(var(--size-1) * 0.5);
    --size-2: calc(var(--size-1) * 2);
    --size-3: calc(var(--size-1) * 3);
  }

  * {
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgba(0, 0, 0, 0.65);
    margin: 0;
  }
`;var s,c;t.a=n,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(n,"default","/home/runner/work/stock-eye/stock-eye/source/src/website/App.css.jsx"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o("3UD+")(e))},xlw7:function(e,t,o){"use strict";var r=o("6Q30");o.d(t,"a",(function(){return r.a})),o.d(t,"b",(function(){return r.b}));"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature}},[["QmCO",1,2]]]);