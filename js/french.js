"use strict";
console.log("Let's translate to french!");
var frenchLang = {merry:"joyeux", christmas:"noel", and:"et", happy:"bonne", newyear:"année"};
// var text = document.getElementById("text-field");
// var translate = document.getElementById("translation");

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

