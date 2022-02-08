import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async ({currentSubreddit, currentSearchTerm}, thunkAPI) => {
        let response = null;

        if(currentSearchTerm) {
            response = await fetch(`https://www.reddit.com/search.json?q=${currentSearchTerm}`);
        } else {
            response = await fetch(`https://www.reddit.com/${currentSubreddit}.json`);
        }
        
        return response.json();
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        currentSubreddit: 'r/Home',
        subredditsPosts: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        setCurrentSubreddit: (state, action) => {
            state.currentSubreddit = action.payload;
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },

        [fetchPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
        },

        [fetchPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.subredditsPosts = [];

            const postsFetched = action.payload.data.children;

            postsFetched.forEach(postFetched => {
                state.subredditsPosts.push({
                    id: postFetched.data.id,
                    subreddit: postFetched.data.subreddit_name_prefixed,
                    title: postFetched.data.title,
                    numUps: postFetched.data.ups,
                    numComments: postFetched.data.num_comments,
                    author: postFetched.data.author,
                    createdUTC: Number(`${postFetched.data.created_utc}000`),
                    url: `https://www.reddit.com${postFetched.data.permalink}`
                });
            });
        }
    }
});

const selectCurrentSubreddit = state => state.posts.currentSubreddit;
const selectSubredditsPosts = state => state.posts.subredditsPosts;
const selectIsLoadingPosts = state => state.posts.isLoading;
const selectIsErrorPosts = state => state.posts.isError;

export { fetchPosts };
export { selectCurrentSubreddit, selectSubredditsPosts, selectIsLoadingPosts, selectIsErrorPosts };
export const { setCurrentSubreddit } = postsSlice.actions;
export default postsSlice.reducer;