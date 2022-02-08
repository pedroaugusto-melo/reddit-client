import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from '../features/search-bar/searchBarSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import postsReducer from '../features/posts/postsSlice';
import commentsReducer from '../features/posts/post/comments/commentsSlice';

const store = configureStore({
    reducer: {
        searchBar: searchBarReducer,
        subreddits: subredditsReducer,
        posts: postsReducer,
        comments: commentsReducer
    }
});

export default store;