import React from 'react'
import './Cards.css'

const Cards = ({ users }) => {
    console.log(users.data[0])
    return (
        <section>
            {users.data.map((users) =>
                <>
                    <center>
                    <div key={users.id} className="card">
                    <center><img src={users.avatar} alt=" " /></center>
                    <h1 key={users.id}>{users.first_name} {users.last_name}</h1>
                        <h2>{users.email}</h2>
                        
                        </div>
                        </center>
            </>)}

        </section>
    )
}

export default Cards
