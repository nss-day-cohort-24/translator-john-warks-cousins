(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
console.log("Let's translate to french!");
var frenchLang = {"merry":"joyeux", "christmas":"noel", "and":"et", "happy":"bonne", "new year":"année"};
var text = document.getElementById("text-field");
var translate = document.getElementById("translation");

function translateTo(french){
    for (let item in frenchLang){
        if (text.value === item){
            console.log(text.value);
            translate.innerHTML = frenchLang[item];
        }
    }
}

module.exports = translateTo(frenchLang);

// function french(){
//     return french;
// }

//merry christmas and happy new year
//joyeux Noel et bonne année


// module.exports = french;

//parse entered text into a string
//create a switch to translate each english[x] into french
//send this to a new string
//send to DOM


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
var russiaLang = {"merry":"veselly", "christmas":"rozhdestvo", "and":"a takzhe", "happy":"schastlivyy", "new":"novyy", "year":"god"};

var text = document.getElementById("text-field");
var translate = document.getElementById("translation");

function translateTo(russian){
    for (let item in russiaLang){
        if (text.value === item){
            console.log(text.value);
            translate.innerHTML = russiaLang[item];
        }
    }
}


module.exports = translateTo(russiaLang);
},{}]},{},[4]);
