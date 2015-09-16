var db = require('db');
var Log = require('logger')(module);
var User = require('./user');

function run() {
    var vasya = new User("111");
    var petya = new User("222");

    vasya.hello(petya);

    Log(db.getPhrase("RunSuccessful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}