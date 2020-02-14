import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { art } from './reducers';
import ArtSearch from './containers/ArtSearchContainer';
import ReduxThunk from 'redux-thunk';

const store = createStore(art, applyMiddleware(ReduxThunk));
// redux-thunk lets you write actions that return FUNCTIONS instead of objects.
// you can write multi-step dispatches.

store.subscribe(() => {
    console.table(store.getState())
});


function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <ArtSearch />
    </div>
    </Provider>
  );
}

export default App;
