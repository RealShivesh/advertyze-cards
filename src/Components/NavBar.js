import React from 'react'
import './NavBar.css'

function NavBar({getUsers}) {
    return (
        <div>
            <div className="navbar">BrandName</div>
            <button onClick={getUsers}>GET USERS</button>
            <br/>
        Page 1 |
        Page 2</div>
    )
}

export default NavBar
