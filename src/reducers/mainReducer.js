import { LOAD_CHARACTERS } from "../actions/types";

const state = {
    characters: {},
    episodes: {},
    locations: {}
};

const mainReducer = (state, action) => {
    switch(action.type){
        case LOAD_CHARACTERS:
            console.log('characters loaded');
            return {...state, characters: action.payload};
        default:
            return state;
    }
}

export default mainReducer;