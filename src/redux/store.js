import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';


const persistConfig = {
    key: 'Pass',
    storage:storage,
    whitelist: ['Pass']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)))

const persistor = persistStore(store);

export { persistor, store };

