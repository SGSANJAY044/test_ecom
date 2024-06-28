import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentLanguage: "en",
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguageData: (state, action) => {
            state.currentLanguage = action.payload
        },
        clearLanguageData: (state) => {
            state.currentLanguage = null;
        },
    },
});

export const { setLanguageData, clearLanguageData } = languageSlice.actions;

export default languageSlice.reducer; 