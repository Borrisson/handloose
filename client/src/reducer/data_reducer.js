export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_USER = "SET_USER";
export const DESTROY_USER = "DESTROY_USER";

const dataReducer = (state, { type, user, games, accuracies }) => {
  switch (type) {
    case SET_APPLICATION_DATA:
      return {
        ...state,
        user,
        games,
        accuracies,
      };
    case SET_USER:
      return {
        ...state,
        user,
      };
    case DESTROY_USER:
      return {
        ...state,
        user: "",
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${type}`);
  }
};

export default dataReducer;
