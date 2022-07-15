!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,y=Math.min,p=function(){return v.Date.now()};function b(e,t,n){var r,o,u,a,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function b(e){return l=e,f=setTimeout(O,t),s?m(e):a}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function O(){var e=p();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?y(n,u-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?m(e):(r=o=void 0,a)}function w(){var e=p(),n=j(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return b(c);if(d)return f=setTimeout(O,t),m(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,h(n)&&(s=!!n.leading,u=(d="maxWait"in n)?g(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function h(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=f.test(t);return r||c.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),O=document.querySelector("input"),T=document.querySelector("textarea"),w="feedback-data",x={};j.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),r.remove(w)})),j.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,r.save(w,x)}),500)),function(){var e=r.load(w);if(void 0===e)return;O.value=e.email,T.value=e.message}()}();
//# sourceMappingURL=03-feedback.bf62a8a8.js.map