import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk'
import Eventreducer from './eventsList/reducer';


const reducer = combineReducers({
    eventsData :Eventreducer
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);



export default store;