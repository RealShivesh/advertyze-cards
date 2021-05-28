import React from 'react'
import './Cards.css'

function Cards(user) {
    return (
        <div>
            <div className="card">
                <h4>{user.name}{user.last_name}</h4>
                {user.email}
            </div>
        </div>
    )
}

export default Cards
