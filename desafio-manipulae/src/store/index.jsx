import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { musicsReducer } from "./modules/musics/reducer";
import { albunsReducer } from "./modules/albuns/reducer";
import { artistsReducer } from "./modules/artists/reducer";

const reducers = combineReducers({
  musics: musicsReducer,
  albuns: albunsReducer,
  artists: artistsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
