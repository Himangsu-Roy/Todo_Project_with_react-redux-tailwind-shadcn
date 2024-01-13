import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counterSlice";
import Logger from "./middleware/Loggler";
// import logger from "redux-logger";

import todoReducer from "./features/todoSlice";
import { baseApi } from "./api/api";

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger, baseApi.middleware as any),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
