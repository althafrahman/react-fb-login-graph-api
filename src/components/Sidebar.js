import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
export class Sidebar extends Component {
    render() {
        return (
        
                <div className="sidebar">
                        <h5>GROWTH PLUG</h5>
                        <ul className="side-contents">
                            <li className="active"><Link to="/dashboard" className="side-text"><i className="fas fa-home"></i>Dashboard</Link></li>
                            <li><a className="side-text" ><i className="fas fa-user"></i>Website</a></li>
                            <li><a className="side-text"><i className="fas fa-address-card"></i>Visitors</a></li>
                            <li><a className="side-text"><i className="fas fa-project-diagram"></i>Reviews</a></li>
                            <li><a className="side-text"><i className="fas fa-blog"></i>Listing</a></li>
                            <li><a className="side-text"><i className="fas fa-address-book"></i>Appointments</a></li>
                            <li><a className="side-text"><i className="fas fa-map-pin"></i>Settings</a></li>
                        </ul>

                    </div>
        )
    }
}

export default Sidebar
