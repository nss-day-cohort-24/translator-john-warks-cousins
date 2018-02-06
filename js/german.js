"use strict";

var germanLang = {"merry":"fröhlich", "Christmas":"Weihnachten", "and":"und", "happy":"glücklich", 
"new":"neu", "my":"meine", "friend":"Freund"}; 

var text = document.getElementById("text-field");
var translate = document.getElementById("translation");

function translateTo(german){
    for (let item in germanLang){
        if (text.value == item){
            console.log(text.value);
            translate.innerHTML = germanLang[item];
        }
    }
}




module.exports = translateTo(germanLang);