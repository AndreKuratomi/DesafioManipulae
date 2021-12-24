import { FIND_ARTIST } from "../actionTypes";

export const findArtist = (artist) => ({
  type: FIND_ARTIST,
  artist,
});
