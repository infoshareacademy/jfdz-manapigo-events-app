import React from 'react'
import { connect } from 'react-redux'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

import events from './events'

const mapStateToProps = (state) => ({
    user: state.dashboard.userData
})



const Dashboard = (props) => (
    <div>
        <div style={{height: 300}}>
            <BigCalendar
            selectable
            events={events}
            timeslots={8}
            defaultView='week'
            scrollToTime={new Date(1970, 1, 6)}
            defaultDate={new Date(2016, 10, 27)}
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={(slotInfo) => alert(
                `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}`
            )}
            />
        </div>
    </div>
)

export default connect(mapStateToProps)(Dashboard)