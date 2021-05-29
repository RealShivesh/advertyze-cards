import React from 'react'
import './Cards.css'

const Cards = ({ users }) => {
    return (
        <div className="card">
            {users.data.map((users) =>
                <>
                    <div key={users.id}>
                    <h1>{users.first_name} {users.last_name}</h1>
                        <h2>{users.email}</h2>
                        <img src={users.avatar} alt=" " />
                        </div>
            </>)}

        </div>
    )
}

export default Cards
