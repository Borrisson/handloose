export function getHighestScoreFromUser({ games, user }) {
  const scoresFromUser = games
    .filter((el) => el.user_id === user.id)
    .map((el) => el.score);
  return scoresFromUser.length ? Math.max(...scoresFromUser) : [];
}
