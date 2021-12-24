import { FIND_ALBUM } from "../actionTypes";

export const albunsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALBUM:
      const { album } = action;
      return [...state, album];
    default:
      return state;
  }
};
