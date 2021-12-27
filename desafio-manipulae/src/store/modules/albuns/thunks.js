import api from "../../../services/api";
import { findAlbum } from "./actions";

import Cards from "../../../components/Cards";

export const findAlbumThunk = (input, setError) => (dispatch) => {
  api
    .get(`/search?q=album: "${input}"`)
    .then((response) => {
      const arr = response.data;
      dispatch(findAlbum(arr.map((elt) => <Cards elt={elt} type="albuns" />)));
      setError(false);
    })
    .catch((e) => setError(true));
};
