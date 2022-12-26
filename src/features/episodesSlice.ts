import {createSlice, createAsyncThunk, PayloadAction, createSelector} from '@reduxjs/toolkit'
import axios from 'axios';

//const fetchEpisodes = createAsyncThunk();

const initialState = {

}

const episodesSlides = createSlice({
    name: "episodes",
    initialState,
    reducers: {},
    extraReducers: {

    }
});

export default episodesSlides.reducer;