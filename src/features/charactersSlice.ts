import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

//const fetchCharacters = createAsyncThunk();

const initialState = {
    
}

const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {},
    extraReducers: {

    }
});

export default charactersSlice.reducer;