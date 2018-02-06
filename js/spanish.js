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

