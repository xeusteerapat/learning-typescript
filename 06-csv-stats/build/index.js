"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var arsenalWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Arsenal' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        arsenalWins++;
    }
    else if (match[2] === 'Arsenal' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        arsenalWins++;
    }
}
console.log("Arsenal won: " + arsenalWins + " games");
