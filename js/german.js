"use strict";
console.log("Let's translate to german!");
var germanLang = {
    merry:"fröhlich", 
    christmas:"weihnachten", 
    and:"und", 
    happy:"glücklich", 
    new: "neu",
    year:"jahr"};


function germanTranslator(words){
    let phrase = words.split(" ");
    for (let item in phrase){
        if (item === germanLang[`${item}`]){
            console.log(item, phrase);
        }
    }
    console.log(words, phrase);
    for (let item in germanLang){
        if (phrase == item){
            console.log(words, phrase);
            document.getElementById("translation").innerHTML = germanLang[`${item}`];
        }
    }
}

module.exports = germanTranslator;