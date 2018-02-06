"use strict";

//console.log("hola mundo");

var spanishLang = {"merry":"alegre", "christmas":"Navidad", "and":"y", "happy":"contento", "new":"nuevo", "year":"año"};

var text = document.getElementById("text-field");
var translate = document.getElementById("translation");

function translateTo(spanish){    
    for (let item in spanishLang){
        switch (spanishLang) {
            case text.value == item:
                translate.innerHTML = spanishLang[item];
                break;
        }
    }
}
// var x = document.getElementById("langOptions").selectedIndex;
// if (document.getElementsByTagName("option")[x].value === 'spanish') {
//     document.getElementById("btn-trans").addEventListener("click", translateTo() );
// }
    
    
module.exports = translateTo(spanishLang);