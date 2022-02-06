import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => (
            state = action.payload
        )
    }
});

const selectSearchTerm = state => state.searchBar;

export const { setSearchTerm } = searchBarSlice.actions;
export { selectSearchTerm };
export default searchBarSlice.reducer;