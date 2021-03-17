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
      .then(([users, games, accuracies]) => {
        dispatch({
          type: SET_APPLICATION_DATA,
          user: { ...users.data },
          games: [...games.data],
          accuracies: [...accuracies.data],
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleLogout() {
    dispatch({
      type: DESTROY_USER,
    });
    return axios.delete(`api/sessions/${state.user.id}`);
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
    loggedIn,
    handleLogout,
  };
};

export default useApplicationData;
