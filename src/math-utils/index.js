/* eslint-disable */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("math-utils",[],n):"object"==typeof exports?exports["math-utils"]=n():t["math-utils"]=n()}(this,function(){return function(t){function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=0)}({"./src/index.js":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("./src/rangeUtils/index.js");e.d(n,"rangeUtils",function(){return i.a});var r=e("./src/unitUtils/index.js");e.d(n,"unitUtils",function(){return r.a})},"./src/rangeUtils/index.js":function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),o=function(){function t(){i(this,t)}return r(t,[{key:"mapBetween",value:function(t,n,e){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:100;return(r-i)*(t-n)/(e-n)+i}}]),t}();n.a=new o},"./src/unitUtils/index.js":function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function t(){var n=this;i(this,t),this.UNIT={EM:"em",REM:"rem",PX:"px",PERCENT:"%"},this.math={addition:function(t,n){var e=this.detectUnit(t)||this.detectUnit(n);return this.rmUnit(t)+this.rmUnit(n)+e}.bind(this),subtract:function(t,n){var e=this.detectUnit(t)||this.detectUnit(n);return this.rmUnit(t)-this.rmUnit(n)+e}.bind(this),multiply:function(t,n){var e=this.detectUnit(t)||this.detectUnit(n);return this.rmUnit(t)*this.rmUnit(n)+e}.bind(this),divide:function(t,n){var e=this.detectUnit(t)||this.detectUnit(n);return this.rmUnit(t)/this.rmUnit(n)+e}.bind(this)},this.detectUnit=function(t){var e=void 0,i=t.toString();if(i.match(n.UNIT.PX))e=n.UNIT.PX;else if(i.match(n.UNIT.REM))e=n.UNIT.REM;else if(i.match(n.UNIT.EM))e=n.UNIT.EM;else{if(!i.match(n.UNIT.PERCENT)){if(isNaN(t))throw new Error("detectUnit can't find unit for "+t);return null}e=n.UNIT.PERCENT}return e},this.rmUnit=function(t,e){var i=t.toString(),r=e||n.detectUnit(i),o=i.replace(r,"");return parseFloat(o)},this.toPercent=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return""+Math.floor(t/e*100*Math.pow(10,i))/Math.pow(10,i)+n.UNIT.PERCENT}};n.a=new r},0:function(t,n,e){t.exports=e("./src/index.js")}})});
//# sourceMappingURL=math-utils.js.map