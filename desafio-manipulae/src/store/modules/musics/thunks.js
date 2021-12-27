import api from "../../../services/api";
import { findMusic } from "./actions";

import Cards from "../../../components/Cards";

export const findMusicThunk = (input, setError) => (dispatch) => {
  api
    .get(`/search?q=track: "${input}"`)
    .then((response) => {
      console.log(input);
      console.log(response);
      const arr = response.data;
      dispatch(findMusic(arr.map((elt) => <Cards elt={elt} type="musics" />)));
      setError(false);
    })
    .catch((e) => setError(true));
};
