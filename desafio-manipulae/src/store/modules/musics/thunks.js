import { api } from "../../../services/api";
import { findMusic } from "./actions";

export const findMusicThunk = (input, setError) => (dispatch) => {
  api
    .get(`/music/${input}`)
    .then((response) => {
      const arr = response.data;
      dispatch(findMusic(arr));
      setError(false);
    })
    .catch((e) => setError(true));
};
