(function e(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n(require("react"));else if(typeof define==="function"&&define.amd)define(["react"],n);else if(typeof exports==="object")exports["ReactCountDown"]=n(require("react"));else t["ReactCountDown"]=n(t["react"])})(window,function(e){return function(e){var t={};function n(r){if(t[r]){return t[r].exports}var o=t[r]={i:r,l:false,exports:{}};e[r].call(o.exports,o,o.exports,n);o.l=true;return o.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(e,t){if(t&1)e=n(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t);var r=n(0);var o=n.n(r);var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function i(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var l=function(e){i(t,e);function t(){var e;var n,r,o;c(this,t);for(var a=arguments.length,i=Array(a),l=0;l<a;l++){i[l]=arguments[l]}return o=(n=(r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r),r.state={count:Date.now()},r.timer=null,r.tick=function(){var e=void 0;if(!r.props.count){e=Date.now()}else{e=Math.floor((r.props.count-Date.now())/1e3)}r.timer=setInterval(function(){if(e<=0){clearInterval(r.timer);if(typeof r.props.callback==="function"){r.props.callback()}return}e--;r.setState({count:e})},1e3)},n),u(r,o)}a(t,[{key:"componentDidMount",value:function e(){this.tick()}},{key:"componentDidUpdate",value:function e(t,n,r){if(t.count!==this.props.count){clearInterval(this.timer);this.tick()}}},{key:"componentWillUnmount",value:function e(){clearInterval(this.timer)}},{key:"render",value:function e(){var t=this.props,n=t.style,r=t.className,a=t.dayText,c=a===undefined?"day":a;var u=Math.floor(this.state.count/60/60/24);var i=Math.floor(this.state.count/60/60-u*24);i=("0"+i).slice(-2);var l=Math.floor(this.state.count/60-i*60-u*24*60);l=("0"+l).slice(-2);var f=this.state.count-u*24*60*60-i*60*60-l*60;f=("0"+f).slice(-2);return o.a.createElement("span",{className:"count-down-wrapper "+r,style:n},o.a.createElement("i",{className:"count-down-day"},u,o.a.createElement("em",{className:"count-down-day-text"},u>0?c:null)),o.a.createElement("i",{className:"count-down-hours"},i),o.a.createElement("i",{className:"count-down-symbol"},":"),o.a.createElement("i",{className:"count-down-minutes"},l),o.a.createElement("i",{className:"count-down-symbol"},":"),o.a.createElement("i",{className:"count-down-seconds"},f))}}]);return t}(o.a.Component);t["default"]=l}])});