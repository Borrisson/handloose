import { useEffect, useReducer } from "react";
import dataReducer, {
  DESTROY_USER,
  SET_APPLICATION_DATA,
  SET_USER,
} from "../reducer/data_reducer";
import axios from "axios";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    user: {},
    games: [],
    accuracies: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/users", { withCredentials: true }),
      axios.get("/api/games", { withCredentials: true }),
      axios.get("/api/accuracies", { withCredentials: true }),
    ])
      .then(([userData, gamesData, accuraciesData]) => {
        // These conditionals make sure to pass empty states in the event that the guest user is not logged in
        const user = userData.data.status === 401 ? {} : userData.data;
        const games = gamesData.data.status === 401 ? [] : gamesData.data;
        const accuracies =
          accuraciesData.data.status === 401 ? [] : accuraciesData.data;

        handleAppData({ user, games, accuracies });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleLogout() {
    dispatch({
      type: DESTROY_USER,
    });
    return axios.delete(`api/sessions/${state.user.id}`);
  }

  function handleAppData({ user, games, accuracies }) {
    dispatch({
      type: SET_APPLICATION_DATA,
      user: { ...user },
      games: [...games],
      accuracies: [...accuracies],
    });
  }

  function loggedIn(user) {
    dispatch({
      type: SET_USER,
      user,
    });
  }

  return {
    state,
    dispatch,
    handleLogout,
    handleAppData,
    loggedIn,
  };
};

export default useApplicationData;
