import { createStore, applyMiddleware, compose } from 'redux';
// To handle async actions (like API calls) in store
import reduxThunk from 'redux-thunk';
// Reducers
import reducers from '../reducers';

const configureStore = () => {
    return createStore(
        reducers,
        compose(
            applyMiddleware(reduxThunk),
            typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
                ? window.devToolsExtension()
                : f => f,
        ),
    );
};

export default configureStore;
