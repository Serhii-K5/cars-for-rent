import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./sliceAdverts";
import { favoriteReducer } from "./sliceFavorite";
import formReducer from './sliceForm';

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: persistReducer(favoritesPersistConfig, favoriteReducer),
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


// import { configureStore } from '@reduxjs/toolkit';
// import formReducer from './formSlice';

// const store = configureStore({
//   reducer: {
//     form: formReducer,
//   },
// });

// export default store;