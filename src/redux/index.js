import {createStore, combineReducers, applyMiddleware} from "redux";
import bookingReducer from "./reducers/bookingReducers";
import createSagaMiddleware from "redux-saga";
import {launchesWatcher} from "./saga/BookingLaunchesSaga";

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    bookingReducer,
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(launchesWatcher)

export default store