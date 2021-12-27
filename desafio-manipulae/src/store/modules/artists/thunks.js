import api from "../../../services/api";
import { findArtist } from "./actions";

export const findArtistThunk = (input, setError) => (dispatch) => {
  api
    .get(`/search?q=artist: "${input}"`)
    .then((response) => {
      const arr = response.data;
      dispatch(findArtist(arr));
      setError(false);
    })
    .catch((e) => setError(true));
};
