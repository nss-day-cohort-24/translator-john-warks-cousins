"use strict";

console.log("hola mundo");

var spanishLang = {"merry":"alegre", "christmas":"Navidad", "and":"y", "happy":"contento", "new":"nuevo", "year":"año"}

var text = document.getElementById("text-field");
var translate = document.getElementById("translation");

function translateTo(spanish){
    for (let item in spanishLang){
        if (text.value === item){
            console.log(text.value);
            translate.innerHTML = spanishLang[item];
        }
    }
}


module.exports = translateTo(spanish);