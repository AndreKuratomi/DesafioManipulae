import { FIND_MUSIC } from "../actionTypes";

export const findMusic = (music) => ({
  type: FIND_MUSIC,
  music,
});
