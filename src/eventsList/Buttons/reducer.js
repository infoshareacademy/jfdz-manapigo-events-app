import { SAVING_DATA } from './actionTypes'

const initialState = {
    calendarState : [],
}



export default (state=initialState, action) => {

    switch (action.type) {
        case SAVING_DATA:
            return Object.assign({}, state, {
                calendarState :  state.calendarState.concat(action.calendar)
            })
        default:
            return state
    }
}