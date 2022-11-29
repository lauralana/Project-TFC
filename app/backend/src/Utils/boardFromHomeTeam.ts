const getScore = (matchesHome: any) => {
  let [totalVictories, totalDraws, totalLosses, totalPoints] = [0, 0, 0, 0];
  matchesHome.forEach((team: any) => {
    if (team.homeTeamGoals > team.awayTeamGoals) {
      totalPoints += 3;
      totalVictories += 1;
    }
    if (team.homeTeamGoals < team.awayTeamGoals) {
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

const getBalance = (matchesHome: any) => {
  const goalsFavor = matchesHome.reduce((acc: number, { homeTeamGoals }: any) => acc
  + homeTeamGoals, 0);
  const goalsOwn = matchesHome.reduce((acc: number, { awayTeamGoals }: any) => acc
  + awayTeamGoals, 0);
  const goalsBalance = goalsFavor - goalsOwn;
  return { goalsFavor, goalsOwn, goalsBalance };
};

const leaderboard = (matchesHome: any, teamName: string) => {
  const obj = {
    name: teamName,
    totalPoints: getScore(matchesHome).totalPoints,
    totalGames: matchesHome.length,
    totalVictories: getScore(matchesHome).totalVictories,
    totalDraws: getScore(matchesHome).totalDraws,
    totalLosses: getScore(matchesHome).totalLosses,
    goalsFavor: getBalance(matchesHome).goalsFavor,
    goalsOwn: getBalance(matchesHome).goalsOwn,
    goalsBalance: getBalance(matchesHome).goalsBalance,
    efficiency: getPercentage(getScore(matchesHome).totalPoints, matchesHome.length),
  };
  return obj;
};

export default leaderboard;
