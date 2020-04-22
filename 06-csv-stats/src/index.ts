import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let arsenalWins = 0;

for (let match of matches) {
  if (match[1] === 'Arsenal' && match[5] === MatchResult.HomeWin) {
    arsenalWins++;
  } else if (match[2] === 'Arsenal' && match[5] === MatchResult.AwayWin) {
    arsenalWins++;
  }
}

console.log(`Arsenal won: ${arsenalWins} games`);
