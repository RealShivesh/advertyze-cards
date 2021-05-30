import React from 'react'
import './NavBar.css'


function NavBar({getUsers}) {
    return (
        <div>
            <div className="navbar">BrandName<br/>
            <center><button onClick={getUsers}>GET USERS</button></center>
            </div></div>
    )
}

export default NavBar
