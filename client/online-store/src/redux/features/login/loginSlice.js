import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginReq = createAsyncThunk(
    "Login/loginRequest",
    async (payload, { rejectWithValue, dispatch }) => {
        try {
            const res = await axios.post(
                "http://localhost:8080/login",
                payload,
                {}
            );
        } catch (error) {}
    }
);

export const loignSlice = createSlice({
    name: "Login",
    initialState: {},
    reducers: {},
    extraReducers: {},
});
