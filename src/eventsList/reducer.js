/**
 * Created by piotrandrzejewski on 06/11/2016.
 */

import {
    REQUEST_EVENTS,
    RECEIVE_EVENTS
} from './actionTypes'

const initialState = {
    events : [],
    isLoading: false
}


export default (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_EVENTS:
            return Object.assign({}, state, {
                isLoading: true
            })
        case RECEIVE_EVENTS:
            return Object.assign({}, state, {
                isLoading: false,
                events: action.events
            })
        default:
            return state
    }

}

