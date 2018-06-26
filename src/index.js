import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { loadState, saveState } from './services/localStorage'

const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
