import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

let arsenalWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Arsenal' && match[5] === MatchResult.HomeWin) {
    arsenalWins++;
  } else if (match[2] === 'Arsenal' && match[5] === MatchResult.AwayWin) {
    arsenalWins++;
  }
}

console.log(`Arsenal won: ${arsenalWins} games`);
