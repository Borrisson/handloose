import { useEffect, useReducer } from "react";
import dataReducer, { DESTROY_USER, SET_USER } from "../reducer/data_reducer";
import axios from "axios";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    user: "",
    games: [],
    accuracy: [],
  });
  useEffect(() => {
    axios
      .get("/api/users", { withCredentials: true })
      .then(({ data }) => {
        dispatch({
          type: SET_USER,
          user: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleLogout() {
    return axios.delete(`api/sessions/${state.user.id}`).then(() =>
      dispatch({
        type: DESTROY_USER,
      })
    );
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
