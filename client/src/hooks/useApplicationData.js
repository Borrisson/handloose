import { useEffect, useReducer } from "react";
import dataReducer, {
  DESTROY_USER,
  SET_APPLICATION_DATA,
  SET_USER,
  SET_GAME_DATA,
} from "../reducer/data_reducer";
import axios from "axios";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    user: {},
    games: [],
    accuracies: [],
    leaderboard: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/users", { withCredentials: true }),
      axios.get("/api/games?order_by=score_desc&limit=10", {
        withCredentials: true,
      }),
    ])
      .then(([{ data }, res]) => {
        handleAppData({ ...res.data, ...data });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleLogout() {
    dispatch({
      type: DESTROY_USER,
    });
    return axios.delete(`/api/sessions/${state.user.id}`);
  }

  function handleAppData({ user, games, accuracies, leaderboard }) {
    dispatch({
      type: SET_APPLICATION_DATA,
      user: { ...user },
      games: [...games],
      accuracies: [...accuracies],
      leaderboard: [...leaderboard],
    });
  }

  function loggedIn(user) {
    dispatch({
      type: SET_USER,
      user,
    });
  }

  function handleGameData(game, accuracies, name) {
    const leaderboardCopy = [{ ...game, name }]
      .concat(
        state.leaderboard.map((el) => {
          return { ...el };
        })
      )
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    dispatch({
      type: SET_GAME_DATA,
      games: [...state.games, game],
      accuracies: [...state.accuracies, ...accuracies],
      leaderboard: leaderboardCopy,
    });

    return Promise.all([
      axios.post("/api/accuracies", { accuracies }),
      axios.post("/api/games", { game }),
    ]);
  }

  return {
    state,
    dispatch,
    handleLogout,
    handleAppData,
    loggedIn,
    handleGameData,
  };
};

export default useApplicationData;
