import {createSlice, createAsyncThunk, PayloadAction, createSelector} from '@reduxjs/toolkit'
import axios from 'axios';
import { RootState } from '../app/store';

const EPISODES_API_URL = `${import.meta.env.VITE_BASE_API_URL}/episode`;

export const fetchEpisodes = createAsyncThunk("/locations", async (_, thunkAPI) => {
    try {
        // return await axios.get(EPISODES_API_URL).then(data => console.log(data));
        const response = await axios.get(EPISODES_API_URL);
        return await response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({error: "couldn't fetch resources"});
    }
});

interface Episode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}

export interface episodesState {
    count: number,
    pages: number,
    episodes: Episode[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string
}

interface episodesPayload {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null
    },
    results: Episode[]
}

const initialState: episodesState = {
    count: 0,
    pages: 0,
    episodes: [],
    loading: "idle",
    error: ""
}

const episodesSlides = createSlice({
    name: "episodes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEpisodes.pending, state => {
            state.episodes = [];
            state.loading = "pending";
        });
        builder.addCase(fetchEpisodes.fulfilled, (state, {payload}: PayloadAction<episodesPayload>) => {
            state.episodes = payload.results;
            state.count = payload.info.count;
            state.pages = payload.info.pages;
            state.loading = "succeeded";
        });
        builder.addCase(fetchEpisodes.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = "failed";
        })
    }
});

//createSelector - if we want to memoize the fn which retrives the store value (use only when there is a derived state involved)
export const selectEpisodes = createSelector((state: RootState) => ({
    count: state.episodes.count,
    pages: state.episodes.pages,
    episodes: state.episodes.episodes,
    loading: state.episodes.loading,
    error: state.episodes.error
}), (state) => state);

export default episodesSlides.reducer;