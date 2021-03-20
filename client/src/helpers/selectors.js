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

export function decipher(num) {
  switch (num) {
    case 0:
      return "Q";
    case 1:
      return "A";
    case 2:
      return "Z";
    case 3:
      return "W";
    case 4:
      return "S";
    case 5:
      return "X";
    case 6:
      return "E";
    case 7:
      return "D";
    case 8:
      return "C";
    case 9:
      return "R";
    case 10:
      return "F";
    case 11:
      return "V";
    case 12:
      return "T";
    case 13:
      return "G";
    case 14:
      return "B";
    case 15:
      return "Y";
    case 16:
      return "H";
    case 17:
      return "N";
    case 18:
      return "U";
    case 19:
      return "J";
    case 20:
      return "M";
    case 21:
      return "I";
    case 22:
      return "K";
    case 23:
      return "O";
    case 24:
      return "L";
    case 25:
      return "P";
  }
}
