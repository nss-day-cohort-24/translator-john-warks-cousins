"use strict";
console.log("Let's translate to french!");
var frenchLang = {
    merry:"joyeux", 
    christmas:"noel", 
    and:"et", 
    happy:"bonne", 
    new: "nouveau",
    year:"année"};

// var phrase = [getElementById("text-field").split("");];
// console.log(phrase);

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

