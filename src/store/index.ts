import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export const rootReducers = combineReducers({...reducers});

const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export const middleware = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducers, middleware);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
