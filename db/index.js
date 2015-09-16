
var phrases = {};
exports.connect = function() {
    phrases = require('./lang-ru');
};

exports.getPhrase = function(name) {
    console.log(phrases);
    if (!phrases[name]) {
        throw new Error("no phrase: " + name);
    }
    return phrases[name];
};