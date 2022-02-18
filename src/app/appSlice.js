import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        appearance: 'dark'
    },
    reducers: {
        setAppearance: (state, action) => {
            state.appearance = action.payload;
        }
    }
});

const selectAppearance = state => state.app.appearance;

export const { setAppearance } = appSlice.actions;
export { selectAppearance };
export default appSlice.reducer;