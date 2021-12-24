import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { musicReducer } from "./modules/musics/reducer";
import { albumReducer } from "./modules/albuns/reducer";
import { artistReducer } from "./modules/artists/reducer";

const reducers = combineReducers({
  musics: musicReducer,
  albuns: albumReducer,
  artists: artistReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
