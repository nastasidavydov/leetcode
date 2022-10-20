// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.

var findWinners = function(matches) {
  const matchOutcomes = {};

  for(const match of matches) {
      if (!matchOutcomes[match[0]]) {
          matchOutcomes[match[0]] = { win: 0, lose: 0}
      }

      if (!matchOutcomes[match[1]]) {
          matchOutcomes[match[1]] = { win: 0, lose: 0}
      }

      matchOutcomes[match[0]].win++;
      matchOutcomes[match[1]].lose++;
  }

  const noLose = Object.keys(matchOutcomes).filter((player) => {

      if (matchOutcomes[player].lose === 0) return player;
  })

  const oneLose = Object.keys(matchOutcomes).filter((player) => {

      if (matchOutcomes[player].lose === 1) return player;
  })

  return [noLose, oneLose];
};