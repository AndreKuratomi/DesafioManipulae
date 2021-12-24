import { FIND_ARTIST } from "../actionTypes";

export const artistReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ARTIST:
      const { artist } = action;
      return [...state, artist];
    default:
      return state;
  }
};
