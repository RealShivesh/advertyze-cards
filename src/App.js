import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Cards from './Components/Cards'

function App() {
  return (
    <>
    <div className="App">
        <NavBar />
        <div className="grid">
          <div className="item-1"><Cards /></div>
          <div className="item-2"><Cards /></div>
          <div className="item-3"><Cards /></div>
          <div className="item-4"><Cards /></div>
          <div className="item-5"><Cards /></div>
          <div className="item-6"><Cards /></div>
        </div>
    </div>
      </>
  );
}

export default App;