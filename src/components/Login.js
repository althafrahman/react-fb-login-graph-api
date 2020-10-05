import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import Dashboard from './Dashboard';
import { connect } from "react-redux";
import { defaults } from "../redux/action";
import { Redirect } from 'react-router';



class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            auth: false,
            data : []
        }
    }

    
    
    responseFacebook = (response) => {
        if (response.status != "unknown") {
            this.setState({
                auth: true,
                data: response
            })
        }
        
    }

    componentClicked = data => {
    }

    render() {
        var page = <div className="login-page"><div className="center-note">Stay Connected With US!! <br /><FacebookLogin
        appId="660830644562350"
        autoLoad={false}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} /></div></div>
            
        if (this.state.auth) {
            this.props.defaults(this.state.data)
            // page = <Dashboard />
            return(
                <Redirect to = "/dashboard" />
            )
        }
        return (
            <div>
                {page}
            </div>
        )
    }

    
}

const mapDispatchToProps = (dispatch) => {
    return{
        defaults: (data) => dispatch(defaults(data)),
    }
} 

export default connect(null,mapDispatchToProps)(Login)
