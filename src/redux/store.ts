import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import { api } from "./api/apiSlice";
import userReducer from "./features/user/userSlice";
import searchReducer from "./features/search/serachSlice";
import bookReducer from "./features/book/bookSlice";
import addbookReducer from "./features/book/addbookSlice";
import dBookReducer from "./features/book/dbookSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    search: searchReducer,
    book: bookReducer,
    wishlist: wishlistReducer,
    addbook: addbookReducer,
    dbook: dBookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
