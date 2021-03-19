export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_USER = "SET_USER";
export const DESTROY_USER = "DESTROY_USER";
export const SET_LEADERBOARD = "SET_LEADERBOARD";

const dataReducer = (state, { type, user, games, accuracies, leaderboard }) => {
  switch (type) {
    case SET_APPLICATION_DATA:
      return {
        ...state,
        user,
        games,
        accuracies,
        leaderboard,
      };
    case SET_USER:
      return {
        ...state,
        user,
      };
    case SET_LEADERBOARD:
      return {
        ...state,
        leaderboard,
      };
    case DESTROY_USER:
      return {
        ...state,
        user: {},
        games: [],
        accuracies: [],
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${type}`);
  }
};

export default dataReducer;
