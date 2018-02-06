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

