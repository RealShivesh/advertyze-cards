import React from 'react'
import './Cards.css'
import EmailIcon from '@material-ui/icons/Email'
import PersonIcon from '@material-ui/icons/Person'

const Cards = ({ users }) => {
    return (
        <section>
            {users.map((users) =>
                <>
                    <center>
                    <div key={users.id} className="card">
                    <center><img src={users.avatar} alt=" " /></center>
                    <h1 key={users.id}><EmailIcon/> : {users.first_name} {users.last_name}</h1>
                        <h2><PersonIcon/> : {users.email}</h2>
                        </div>
                        </center>
            </>)}

        </section>
    )
}

export default Cards