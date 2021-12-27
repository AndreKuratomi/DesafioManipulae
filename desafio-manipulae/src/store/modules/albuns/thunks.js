import api from "../../../services/api";
import { findAlbum } from "./actions";

import CardAlbuns from "../../../components/CardAlbuns";

export const findAlbumThunk = (input, setError) => (dispatch) => {
  api
    .get(`/search?q=album: "${input}"`)
    .then((response) => {
      const arr = response.data;
      dispatch(
        findAlbum(arr.map((elt) => <CardAlbuns elt={elt} type="albuns" />))
      );
      setError(false);
    })
    .catch((e) => setError(true));
};
