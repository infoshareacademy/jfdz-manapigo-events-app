import { createStore, applyMiddleware,combineReducers,compose } from 'redux';
import persistState from 'redux-localstorage'
import thunkMiddleware from 'redux-thunk'
import Eventreducer from './eventsList/reducer'
import dashboardReducer from './dashboard/reducer'
import buttonReducer from './eventsList/Buttons/reducer'
import loginReducer from './login/reducer'
import userReducer from './userReducer'

const reducer = combineReducers({
    eventsData :Eventreducer,
    dashboard: dashboardReducer,
    buttonData:buttonReducer,
    login:loginReducer,
    user:userReducer
});

const enhancer = compose(
    applyMiddleware(
        thunkMiddleware
    ),
    persistState([ 'user']),
)

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
);



export default store;