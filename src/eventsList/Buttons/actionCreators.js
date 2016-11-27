import { SAVING_DATA } from './actionTypes'

export function savingData(calendar) {
    return {
        type: SAVING_DATA,
        calendar: {calendar}
    }
}

