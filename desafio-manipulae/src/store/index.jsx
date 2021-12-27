import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { musicReducer } from "./modules/musics/reducers";
import { albumReducer } from "./modules/albuns/reducers";
import { artistReducer } from "./modules/artists/reducers";

const reducers = combineReducers({
  musics: musicReducer,
  albuns: albumReducer,
  artists: artistReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
