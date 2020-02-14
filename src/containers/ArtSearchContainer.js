import {
    connect
} from 'react-redux';

import ArtSearch from '../components/ArtSearch';
import { 
    actionSearch,
    actionResults
} from '../actions';
import Axios from 'axios';




function mapDispatchToProps(dispatch) {
    return {
        handleClick: async () => {
           const results = await Axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers')
           console.log(results);
            dispatch(actionSearch('sunflowers'));
            dispatch(actionResults(results.data.objectIDs));
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(ArtSearch);