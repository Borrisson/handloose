export function getHighestScoreFromUser(state) {
  return getGameInfoFromUserId(state, "score");
}

export function getLongestStreakFromUser(state) {
  return getGameInfoFromUserId(state, "longest_streak");
}

function getGameInfoFromUserId({ games, user }, field) {
  const streaksFromUser = games
    .filter((el) => el.user_id === user.id)
    .map((el) => el[field]);
  return streaksFromUser.length ? Math.max(...streaksFromUser) : [];
}
