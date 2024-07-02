import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentTheme: "Sparrow",
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setThemeData: (state, action) => {
            state.currentTheme = action.payload
        },
        clearThemeData: (state) => {
            state.currentTheme = null;
        },
    },
});

export const { setThemeData, clearThemeData } = themeSlice.actions;

export default themeSlice.reducer; 