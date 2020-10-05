import Axios from 'axios';
import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";

class UpComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : ""
        }
    }
    
    postHandler = () => {
        const {id} = this.props.match.params;
        Axios.post(`https://graph.facebook.com/${id}/feed?`,{
            message : this.state.message,
            access_token : this.props.location.state.acc_tok
        }).then(
            ress => {
               this.setState({
                   message : ""
               })
            }
        )
    }

    messageHandler = (event) => {
        this.setState({
            message : event.target.value
        })
    }
    render() {
        
        return (
            <div>
                <div className="wrapper">
                    <Sidebar />
                    <div className="main_content">
                        <Header name={this.props.name} />
                        <div className="info text-center">
                            <h3>Hello!! Add A Message to the page</h3>
                            <textarea type="text" className="message" value = {this.state.message} onChange = {this.messageHandler}  /> <br />
                            <button className="btn btn-primary" onClick = {this.postHandler} >Post <i className="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        access_token: state.shortAccessToken,
        userID: state.userId
    }
}


export default connect(mapStateToProps, null)(UpComponent)
