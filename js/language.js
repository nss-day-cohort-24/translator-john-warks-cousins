"use strict";
let russia = require("./russia");
let german = require("./german");
let french = require("./french");
let translator = {
    russia,
    german,
    french
};

module.exports = translator;