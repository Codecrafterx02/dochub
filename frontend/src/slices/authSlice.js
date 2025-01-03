import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
    chatInfo: {
        selectedChat: null,
        chats: []
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        setChatInfo: (state, action) => {
            state.chatInfo = action.payload;
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo");
        }
    }
});

export const { setCredentials, logout, setChatInfo } = authSlice.actions;

export default authSlice.reducer;
