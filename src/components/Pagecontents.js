import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
export class Pagecontents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            redirect : false,
            selPage : 1,
        }
    }

    updateHandler = (pageId, access_token) => {
        this.setState({
            redirect : true,
            selPage : pageId,
            accessToken : access_token
        });
    }
    
    render() {
        const pageData = this.props.data
        if(this.state.redirect){
            return(
                <Redirect to={{
                    pathname: `/update/`+this.state.selPage,
                    state: { acc_tok: this.state.accessToken }
                }}  />
               
            )
        }
        
        return (
            <React.Fragment>
                {
                    pageData.map(pages => (
                        <tr key={pages.id}>
                            <td>{pages.name}</td>
                            <td>{pages.category}</td>
                            <td>2/5</td>
                            <td>Yes</td>
                            <td><i className="fas fa-check"></i></td>
                            <td><button className="btn btn-info" onClick = {() => this.updateHandler(pages.id, pages.access_token)}>Update</button></td>
                        </tr>
                    ))
                }
            </React.Fragment>
        )
    }
}

export default Pagecontents
