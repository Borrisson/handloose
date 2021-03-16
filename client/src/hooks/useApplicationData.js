import { useEffect, useReducer } from "react";
import dataReducer, { SET_USER } from "../reducer/data_reducer";
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

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
