"use strict";

let russia = require("./russian");
let german = require("./german");
let french = require("./french");
let spanish = require("./spanish");
let translator = {
    russia,
    german,
    french,
    spanish
};


document.getElementById("btn-trans").addEventListener("click", function(){
    var x = document.getElementById("langOptions").selectedIndex;
    console.log("click", x, document.getElementsByTagName("option")[x].value);
    
        if (document.getElementsByTagName("option")[x].value === 'french'){
            translator.french(document.getElementById("text-field").value);
    }
});
// document.getElementById("btn-trans").addEventListener("click", function(){
//     if (document.getElementsByTagName("option")[x].value === 'spanish') {
//         console.log(translator.spanish);
//         return translator.spanish;
//     }
// });
module.exports = translator;