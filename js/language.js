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