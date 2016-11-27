/**
 * Created by piotrandrzejewski on 03/11/2016.
 */
import React from 'react'
import {Button} from 'react-bootstrap'
import './buttons.css'

import { connect } from 'react-redux'
import { savingData } from './actionCreators'

const mapStateToProps = (state) => ({
    calendars: state.buttonData.calendars,
})

const mapDispatchToProps = (dispatch) => ({
    savingData: (calendar) => dispatch(savingData(calendar)),

})


const buttons = (savingData) => (
            <div>
                <Button onClick={() => savingData()} bsStyle="primary">Dodaj do Kalendarza</Button>
            </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(buttons)
