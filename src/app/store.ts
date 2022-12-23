import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "../features/charactersSlice";
import episodesSlice from "../features/episodesSlice";
import locationsSlice from "../features/locationsSlice";

const store = configureStore({
    reducer: {
        episodes: episodesSlice,
        characters: charactersSlice,
        locations: locationsSlice
    }
});

export default store;

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;