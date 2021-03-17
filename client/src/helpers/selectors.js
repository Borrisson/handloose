export function getHighestScoreFromUser({ games }, userId) {
  const scoresFromUser = games
    .filter((el) => el.user_id === userId)
    .map((el) => el.score);
  return scoresFromUser.length ? Math.max(...scoresFromUser) : [];
}
