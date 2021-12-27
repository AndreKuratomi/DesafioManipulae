import api from "../../../services/api";
import { findArtist } from "./actions";

import Cards from "../../../components/Cards";

export const findArtistThunk = (input, setError) => (dispatch) => {
  api
    .get(`/search?q=artist: "${input}"`)
    .then((response) => {
      const arr = response.data;
      dispatch(
        findArtist(arr.map((elt) => <Cards elt={elt} type="artists" />))
      );
      setError(false);
    })
    .catch((e) => setError(true));
};
