import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/charactersSlice";
import episodesReducer from "../features/episodesSlice";
import locationsReducer from "../features/locationsSlice";

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
        characters: charactersReducer,
        locations: locationsReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
