(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
console.log("Let's translate to french!");
var frenchLang = {
    merry:"joyeux", 
    christmas:"noel", 
    and:"et", 
    happy:"bonne", 
    new: "nouveau",
    year:"année"};


function frenchTranslator(words){
    let phrase = words.split(" ");
    for (let item in phrase){
        if (item === frenchLang[`${item}`]){
            console.log(item, phrase);
        }
    }
    console.log(words, phrase);
    for (let item in frenchLang){
        if (phrase == item){
            console.log(words, phrase);
            document.getElementById("translation").innerHTML = frenchLang[`${item}`];
        }
    }
}

module.exports = frenchTranslator;


},{}],2:[function(require,module,exports){
"use strict"
console.log("Let's translate to german!");
var germanLang = {
    merry:"fröhlich", 
    christmas:"weihnachten", 
    and:"und", 
    happy:"glücklich", 
    new: "neu",
    year:"jahr"};


function germanTranslator(words){
    let phrase = words.split(" ");
    for (let item in phrase){
        if (item === germanLang[`${item}`]){
            console.log(item, phrase);
        }
    }
    console.log(words, phrase);
    for (let item in germanLang){
        if (phrase == item){
            console.log(words, phrase);
            document.getElementById("translation").innerHTML = germanLang[`${item}`];
        }
    }
}

module.exports = germanTranslator;
},{}],3:[function(require,module,exports){
"use strict";

let russian = require("./russian");
let german = require("./german");
let french = require("./french");
let spanish = require("./spanish");
let translator = {
    russian,
    german,
    french,
    spanish
};


document.getElementById("btn-trans").addEventListener("click", function(){
    var x = document.getElementById("langOptions").selectedIndex;
    console.log("click", x, document.getElementsByTagName("option")[x].value);
    
        if (document.getElementsByTagName("option")[x].value === 'french'){
            translator.french(document.getElementById("text-field").value);
        }else if (document.getElementsByTagName("option")[x].value === 'spanish'){
            translator.spanish(document.getElementById("text-field").value);
        }else if (document.getElementsByTagName("option")[x].value === 'german'){
            translator.german(document.getElementById("text-field").value);
        }else if (document.getElementsByTagName("option")[x].value === 'russian'){
            translator.russian(document.getElementById("text-field").value);
        }
    });
// document.getElementById("btn-trans").addEventListener("click", function(){
//     if (document.getElementsByTagName("option")[x].value === 'spanish') {
//         console.log(translator.spanish);
//         return translator.spanish;
//     }
// });
module.exports = translator;
},{"./french":1,"./german":2,"./russian":5,"./spanish":6}],4:[function(require,module,exports){
"use strict";


//console.log("hello world");
let LangModule = require("./language");

},{"./language":3}],5:[function(require,module,exports){
"use strict"
console.log("Let's translate to russian!");
var russianLang = {
    merry:"veselly", 
    christmas:"rozhdestvo", 
    and:"a takzhe", 
    happy:"schastlivyy", 
    new: "novyy",
    year:"god"};


function russianTranslator(words){
    let phrase = words.split(" ");
    for (let item in phrase){
        if (item === russianLang[`${item}`]){
            console.log(item, phrase);
        }
    }
    console.log(words, phrase);
    for (let item in russianLang){
        if (phrase == item){
            console.log(words, phrase);
            document.getElementById("translation").innerHTML = russianLang[`${item}`];
        }
    }
}

module.exports = russianTranslator;
},{}],6:[function(require,module,exports){
"use strict";
console.log("Let's translate to spanish!");
var spanishLang = {
    merry:"feliz", 
    christmas:"navidad", 
    and:"y", 
    happy:"feliz", 
    new: "nuevo",
    year:"año"};


function spanishTranslator(words){
    let phrase = words.split(" ");
    for (let item in phrase){
        if (item === spanishLang[`${item}`]){
            console.log(item, phrase);
        }
    }
    console.log(words, phrase);
    for (let item in spanishLang){
        if (phrase == item){
            console.log(words, phrase);
            document.getElementById("translation").innerHTML = spanishLang[`${item}`];
        }
    }
}

module.exports = spanishTranslator;


},{}]},{},[4]);
