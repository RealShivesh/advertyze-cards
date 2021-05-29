import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Cards from './Components/Cards';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const profileData = async () => {
      setLoading(true)
      const res = await axios("https://reqres.in/api/users")
      console.log(res.data)
      setUsers(res.data)
      setLoading(false)
    }

    profileData()
  }, [])

  if (loading) return 'Loading....'

  return (
    <>
      <div className="App">
        <center><NavBar /></center>
        <div className="grid">
          <Cards users={users} />
        </div>
    </div>
      </>
  );
}

export default App;