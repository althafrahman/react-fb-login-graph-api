import React from 'react'

function Header(props) {
    return (
        <div className="header">
            <span className="user-name">{props.name} <i className="fas fa-caret-down"></i></span>
        </div>
    )
}

export default Header
