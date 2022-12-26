import { createSlice, createAsyncThunk, PayloadAction, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

//const fetchLocations = createAsyncThunk();

const initialState = {

}

const locationsSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {},
    extraReducers: {

    }
});


export default locationsSlice.reducer;