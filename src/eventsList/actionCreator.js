/**
 * Created by piotrandrzejewski on 06/11/2016.
 */
import {
    REQUEST_EVENTS,
    RECEIVE_EVENTS,
    ACTIVE_FILTER,
    RESET_FILTER,
} from './actionTypes'

import fetch from 'isomorphic-fetch'



function requestEvents() {
    return {
        type: REQUEST_EVENTS
    }
}

function receiveEvents(events) {
    return {
        type: RECEIVE_EVENTS,
        events:events
    }
}

export function fetchEvents() {
    return function (dispatch) {
        dispatch(requestEvents())
        return fetch(`${process.env.PUBLIC_URL}/data/events.json`)
            .then(response => response.json())
            .then(events => dispatch(receiveEvents(events)))
    }
}

export function activeFilter(filterName) {
    return {
        type : ACTIVE_FILTER,
        filterName : filterName

    }
}


export function resetFilters(){
    return {
        type:RESET_FILTER,
    }
}

