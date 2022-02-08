import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        const response = await fetch('https://www.reddit.com/subreddits.json');
        
        return response.json();
    }
);

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subredditsData: [],
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: {
        [fetchSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },

        [fetchSubreddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
        },

        [fetchSubreddits.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;

            const subRedditsDataFetched = action.payload.data.children;

            subRedditsDataFetched.forEach(subreddit => {
                state.subredditsData.push(
                    {
                        id: subreddit.data.id,
                        name: subreddit.data.title,
                        icon: subreddit.data.icon_img,
                        displayName: subreddit.data.display_name_prefixed
                    }
                );
            });
        }
    }
});

const selectSubredditsLoadingState = state => state.subreddits.isLoading;
const selectSubrreditsErrorState = state => state.subreddits.isError;
const selectSubredditsData = state => state.subreddits.subredditsData;

export default subredditsSlice.reducer;
export { selectSubredditsData, selectSubredditsLoadingState, selectSubrreditsErrorState };
export { fetchSubreddits };