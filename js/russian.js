"use strict";
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