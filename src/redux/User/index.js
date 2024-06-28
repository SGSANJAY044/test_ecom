import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            console.log(action.payload);
            state.currentUser = action.payload
        },
        clearUserData: (state) => {
            state.currentUser = null;
        },
    },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer; 