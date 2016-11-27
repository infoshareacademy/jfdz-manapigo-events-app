/**
 * Created by piotrandrzejewski on 06/11/2016.
 */

import {
    REQUEST_EVENTS,
    RECEIVE_EVENTS,
    ACTIVE_FILTER,
    RESET_FILTER,
} from './actionTypes'

const initialState = {
    events : [],
    activeFilterName : [],
    availableFilters : ['all','nauka','muzyka','rozrywka'],
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
            let isCategoryFilterActive = state.activeFilterName
                    .indexOf(action.filterName) !== -1;

            return isCategoryFilterActive ?
                Object.assign({}, state, {
                    activeFilterName: state.activeFilterName
                        .filter(
                            filters =>
                                filters !== action.filterName)
                })
                : Object.assign({},state, {
                activeFilterName: state.activeFilterName
                    .concat(action.filterName)
            })

        case  RESET_FILTER:
            return Object.assign({}, state, {
                activeFilterName :  []
            })
        default:
            return state
    }

}

