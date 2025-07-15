import React, { createContext, useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import LeaderBoard from './components/LeaderBoard/LeaderBoard'
import "./App.css"

let data = [
  { id: 1, name: "Rahul", points: 0 },
  { id: 2, name: "Kamal", points: 0 },
  { id: 3, name: "Sanak", points: 0 },
  { id: 4, name: "Priya", points: 0 },
  { id: 5, name: "Amit", points: 0 },
  { id: 6, name: "Neha", points: 0 },
  { id: 7, name: "Vikram", points: 0 },
  { id: 8, name: "Suman", points: 0 },
  { id: 9, name: "Arjun", points: 0 },
  { id: 10, name: "Divya", points: 0 }
];
export let MyContext = createContext();
const App = () => {
  let [users, setUsers] = useState(data)
  let [pointsHistory, setPointsHistory] = useState([]);
  let date = new Date();
  let [lastUpdate, setLastUpdate] = useState(date.toLocaleTimeString());
  return (
    <MyContext.Provider value={{ users, setUsers, pointsHistory, setPointsHistory, lastUpdate, setLastUpdate }}>
      <div className='app-container'>
        <div className='app-container-sub'>
          <Header />
          <div className="flex-container">
            <Sidebar />
            <LeaderBoard />
          </div>
        </div>  
      </div>
    </MyContext.Provider>
  )
}

export default App