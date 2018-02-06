"use strict";
console.log("hello russia");
var russiaLang = {"merry":"veselly", "christmas":"rozhdestvo", "and":"a takzhe", "happy":"schastlivyy", "new":"novyy", "year":"god"}

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


module.exports = translateTo(russian);