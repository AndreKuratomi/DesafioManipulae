import { FIND_ALBUM } from "../actionTypes";

export const findAlbum = (album) => ({
  type: FIND_ALBUM,
  album,
});
