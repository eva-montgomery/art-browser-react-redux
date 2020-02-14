import {SEARCH, SELECT, RESULTS } from "./actions";

const defaultState = {
    query: '',
    results: []
}

export function art(state=defaultState, action) {
switch(action.type) {
    case SEARCH:
        return {
            ...state,
            query: action.payload.query,
        }
    case RESULTS:
        return {
            ...state,
            results: action.payload.results
        }    
    case SELECT:
        return {
            ...state,
        }
    }
}