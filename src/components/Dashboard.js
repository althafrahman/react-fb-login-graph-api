import React, { Component } from 'react'
import '../styles/sidebar.css'
import { connect } from "react-redux";
import { defaults } from "../redux/action";
import axios from 'axios';
import Pagecontents from './Pagecontents';
import Sidebar from './Sidebar';
import Header from './Header';
import { Redirect } from 'react-router';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pageData: [],
            
        }
    }

    componentDidMount = () => {
        var pageDat = [];
        axios.get(`https://graph.facebook.com/${this.props.userID}/accounts?access_token=${this.props.access_token}`)
            .then(res => {
                pageDat = res.data.data;
                this.setState({
                    pageData: res.data.data
                });
            })
    }
    render() {  
        return (
            < div >
                <div className="wrapper">
                    <Sidebar />
                    <div className="main_content">
                        <Header name={this.props.name} />
                        <div className="info">
                            <table className="table table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th className="list-head text-center" colSpan="6">Listing</th>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Rating</th>
                                        <th>Listed</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Pagecontents data={this.state.pageData} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >

            
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


export default connect(mapStateToProps, null)(Dashboard)
