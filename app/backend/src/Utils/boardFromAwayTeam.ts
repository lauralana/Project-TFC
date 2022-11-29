const getScore = (matchesAway: any) => {
  let [totalVictories, totalDraws, totalLosses, totalPoints] = [0, 0, 0, 0];
  matchesAway.forEach((team: any) => {
    if (team.homeTeamGoals < team.awayTeamGoals) {
      totalPoints += 3;
      totalVictories += 1;
    }
    if (team.homeTeamGoals > team.awayTeamGoals) {
      totalLosses += 1;
    }
    if (team.homeTeamGoals === team.awayTeamGoals) {
      totalPoints += 1;
      totalDraws += 1;
    }
  });
  return { totalVictories, totalDraws, totalLosses, totalPoints };
};

const getPercentage = (totalPoints: number, totalGames: number) => (
  ((totalPoints / (totalGames * 3)) * 100).toFixed(2)
);

const getBalance = (matchesAway: any) => {
  const goalsOwn = matchesAway.reduce((acc: number, { homeTeamGoals }: any) => acc
    + homeTeamGoals, 0);
  const goalsFavor = matchesAway.reduce((acc: number, { awayTeamGoals }: any) => acc
    + awayTeamGoals, 0);
  const goalsBalance = goalsFavor - goalsOwn;
  return { goalsFavor, goalsOwn, goalsBalance };
};

const leaderboard = (matchesAway: any, teamName: string) => {
  const obj = {
    name: teamName,
    totalPoints: getScore(matchesAway).totalPoints,
    totalGames: matchesAway.length,
    totalVictories: getScore(matchesAway).totalVictories,
    totalDraws: getScore(matchesAway).totalDraws,
    totalLosses: getScore(matchesAway).totalLosses,
    goalsFavor: getBalance(matchesAway).goalsFavor,
    goalsOwn: getBalance(matchesAway).goalsOwn,
    goalsBalance: getBalance(matchesAway).goalsBalance,
    efficiency: getPercentage(getScore(matchesAway).totalPoints, matchesAway.length),
  };
  return obj;
};

export default leaderboard;

// {
//   "id": 12,
//   "teamName": "Palmeiras",
//   "matchesAway": [
//     {
//       "id": 9,
//       "homeTeam": 1,
//       "homeTeamGoals": 0,
//       "awayTeam": 12,
//       "awayTeamGoals": 3,
//       "inProgress": false
//     },
//     {
//       "id": 30,
//       "homeTeam": 3,
//       "homeTeamGoals": 0,
//       "awayTeam": 12,
//       "awayTeamGoals": 4,
//       "inProgress": false
//     }
//   ]
// };
