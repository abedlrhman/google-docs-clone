import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import userDataReducer from './ducks/userData'
import { watcherSaga } from './sagas/rootSaga'

const reducer = combineReducers({
	userData: userDataReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
  ));

sagaMiddleware.run(watcherSaga)

export default store