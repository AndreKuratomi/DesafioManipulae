import api from "../../../services/api";
import { findAlbum } from "./actions";

export const findAlbumThunk = (input, setError) => (dispatch) => {
  api
    .get(`/search?q=album: "${input}"`)
    .then((response) => {
      const arr = response.data;
      dispatch(findAlbum(arr));
      setError(false);
    })
    .catch((e) => setError(true));
};
