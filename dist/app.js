(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
console.log("hello world");
function french(){
    return french;
}


module.exports = french;
},{}],2:[function(require,module,exports){
"use strict";

function german() {
    return german;
}



module.exports = german;
},{}],3:[function(require,module,exports){
"use strict";

let russia = require("./russian");
let german = require("./german");
let french = require("./french");
let translator = {
    russia,
    german,
    french
};

module.exports = translator;
},{"./french":1,"./german":2,"./russian":5}],4:[function(require,module,exports){
"use strict";


//console.log("hello world");
let LangModule = require("./language");

},{"./language":3}],5:[function(require,module,exports){
"use strict";
console.log("hello russia");
function russia(){
    return russia;
}


module.exports = russia;
},{}]},{},[4]);
