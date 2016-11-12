/**
 * Created by piotrandrzejewski on 06/11/2016.
 */

import {
    REQUEST_EVENTS,
    RECEIVE_EVENTS,
    ACTIVE_FILTER
} from './actionTypes'

const initialState = {
    events : [],
    activeFilterName : ['all'],
    availableFilters : ['all','sport','praca','niunie','rozrywka'],
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
        case ACTIVE_FILTER:
            return Object.assign({},state, {
                filterName:action.filterName
            })
        default:
            return state
    }

}

