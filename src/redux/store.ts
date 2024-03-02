import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articlesSlice";
import articlesDetailsReducer from "./articlesDetailSlice";

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        articleDetail: articlesDetailsReducer
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch