import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from '../features/search-bar/searchBarSlice';

const store = configureStore({
    reducer: {
        searchBar: searchBarReducer
    }
});

export default store;