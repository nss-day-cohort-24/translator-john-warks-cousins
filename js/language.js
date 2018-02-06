"use strict";

let russia = require("./russian");
let german = require("./german");
let french = require("./french");
let spanish = require("./spanish");
let translator = {
    russia,
    german,
    french,
    spanish
};

module.exports = translator;