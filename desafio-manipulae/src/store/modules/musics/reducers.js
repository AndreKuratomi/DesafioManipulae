import { FIND_MUSIC } from "../actionTypes";

export const musicReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_MUSIC:
      const { music } = action;
      return [...state, music];
    default:
      return state;
  }
};
