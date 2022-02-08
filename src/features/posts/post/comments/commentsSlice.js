import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (fetchURL, thunkAPI) => {
        const response = await fetch(`${fetchURL}.json`);
        return response.json();
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        url: '',
        commentsData: {},
        isLoading: false,
        isError: false
    },
    reducers: {
        setURL: (state, action) => {
            state.url = action.payload;
        },

        setPostId: (state, action) => {
            state.commentsData[action.payload] = [];
        }
    },
    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },

        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
        },

        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;

            const commentsDataFetched = action.payload[1].data.children;

            commentsDataFetched.forEach(commentData => {
                const postId = commentData.data.parent_id.slice(3);

                state.commentsData[postId].push({
                    id: commentData.data.id,
                    author: commentData.data.author,
                    text: commentData.data.body,
                    createdUTC: commentData.data.created_utc
                });
            });
        }
    }
});

const selectURL = state => state.comments.url;
const selectComments = state => state.comments.commentsData;
const selectIsLoadingComments = state => state.comments.isLoading;
const selectIsErrorComments = state => state.comments.isError;

export { fetchComments };
export { selectURL, selectComments, selectIsLoadingComments, selectIsErrorComments };
export const { setURL, setPostId } = commentsSlice.actions;
export default commentsSlice.reducer;