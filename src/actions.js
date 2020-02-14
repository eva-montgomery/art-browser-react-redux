export const SEARCH = 'SEARCH';
export const SELECT = 'SELECT';
export const RESULTS = 'RESULTS';

export function actionResults(results) {
    return {
        type: RESULTS,
        payload: {
            results
        }
    } 
}

export function actionSearch(query) {
    return {
        type: SEARCH,
        payload: {
            query
        }
    }
}

export function actionSelect(id) {
    return {
        type: SELECT,
        payload: {
            id
        }
    }
}