import React from 'react'
import {Grid,Col,Row,Thumbnail} from 'react-bootstrap'
import { connect } from 'react-redux'

import  {activeFilter,resetFilters}  from './actionCreator'
import  ButtonsEvent  from './Buttons/buttons'
import  FiltersButton from './FiltersOption/FiltersButton/FiltersButton'
import Dashboard from '../dashboard/Dashboard'
//import { savingData } from './Buttons/actionCreators'



const mapStateToProps = (state) => ({
    //calendars: state.buttonData.calendars,
    events: state.eventsData.events,
    isLoading: state.eventsData.isLoading,
    activeFilterName: state.eventsData.activeFilterName,
})


const mapDispatchToProps = (dispatch) =>({
    activeFilter : (filterName) => dispatch(activeFilter(filterName)),
    resetFilter : () => dispatch(resetFilters()),
    //savingData: (calendar) => dispatch(savingData(calendar)),

})


const events = (
    {
        events,
        isLoading,
        activeFilter,
        activeFilterName,
        resetFilter,

    }) =>(
            <Grid>
                <FiltersButton activeFilter={activeFilter} resetFilter={resetFilter}  />
                <Row>
                    {isLoading ? 'Loading events...' : null}
                    {events
                        .filter(
                            event => activeFilterName.length > 0 ? activeFilterName
                                .indexOf(event.type) !== -1 : true
                        )
                        .map(event =>
                    <Col xs={12} md={4} lg={3} padding="20px">
                        <Thumbnail src={event.img} >
                            <h3>{event.title}</h3>
                            <p>{event.describtion}</p>
                            <ButtonsEvent  />
                        </Thumbnail>
                    </Col>)}
                </Row>
                <div>
                    <Dashboard/>
                </div>
            </Grid>
        );


 export default connect(mapStateToProps,mapDispatchToProps)(events)