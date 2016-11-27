import React from 'react'
import { connect } from 'react-redux'
import './login.css'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import {Button} from 'react-bootstrap'
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

import GoogleLogin from 'react-google-login';


const mapStateToProps = (state) => ({
    user: state.login.userData
})

const mapDispatchToProps = (dispatch) => ({
    loginSuccess: (userData) => dispatch({ type: 'LOGIN_SUCCESS', data: userData.profileObj }),
    loginFailure: () => dispatch({ type: 'LOGIN_FAILURE' }),
    logOut: () => dispatch({ type: 'LOG_OUT' })
})

const Login = (props) => (
    <div>
        {props.user.imageUrl ?
            <Button className=" btn-success  " onClick={() => props.logOut()} >log out</Button>:
            <GoogleLogin
                clientId="751663115292-f4n69p03t1hj8mkrt79d107nrirvbbdc.apps.googleusercontent.com"
                buttonText="Log in"
                onSuccess={props.loginSuccess}
                onFailure={props.loginFailure}>

            </GoogleLogin>
        }
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)