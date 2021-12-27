import api from "../../../services/api";
import { findMusic } from "./actions";

import CardMusics from "../../../components/CardMusics";

export const findMusicThunk = (input, setError) => (dispatch) => {
  api
    .get(`/search?q=track: "${input}"`)
    .then((response) => {
      console.log(input);
      console.log(response);
      const arr = response.data;
      dispatch(
        findMusic(arr.map((elt) => <CardMusics elt={elt} type="musics" />))
      );
      setError(false);
    })
    .catch((e) => setError(true));
};
