import React from 'react'
import './Cards.css'

const Cards = ({ users }) => {
    console.log(users.data[0])
    return (
        <div>
            {users.data.map((users) =>
                <>
                    <div key={users.id} className="card">
                    <img src={users.avatar} alt=" " />
                    <h1 key={users.id}>{users.first_name} {users.last_name}</h1>
                        <h2>{users.email}</h2>
                        
                        </div>
            </>)}

        </div>
    )
}

export default Cards
