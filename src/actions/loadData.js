import { LOAD_CHARACTERS, LOAD_EPISODES, LOAD_LOCATIONS } from "./types";

const baseURL = "https://rickandmortyapi.com/api";

export const loadCharacters = (currentPage = 1) => {
    const url = `${baseURL}/character/?page=${currentPage}`;
    console.log('loading');
    return async dispatch => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.results);
            dispatch({type: LOAD_CHARACTERS, payload: data});
        } catch (err) {
            throw new Error('Unable to load resources. Check later!');
        }

    }

}

export const loadEpisodes = () => {

}

export const loadLocations = () => {

}