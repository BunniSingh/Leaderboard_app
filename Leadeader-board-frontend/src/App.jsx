import React, { createContext, useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import LeaderBoard from './components/LeaderBoard/LeaderBoard'
import "./App.css"
import axios from "axios";
import { useEffect } from 'react'
import { getLatestUpdateTime } from './utils/getLatestupdatedTime'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;
export let MyContext = createContext();
const App = () => {
  let [users, setUsers] = useState([])
  let [pointsHistory, setPointsHistory] = useState([]);
  let [lastUpdate, setLastUpdate] = useState("");

  useEffect(()=> {
    axios.get('/user')
    .then(res => setUsers(res.data.data))
    .then(()=> setLastUpdate(getLatestUpdateTime(users)))
    .catch(err => console.log("Error while get all users: ", err))
  },[]);

  useEffect(()=> {
    axios.get('/point/history')
    .then(res => setPointsHistory(res.data.historyData))
    .catch(err => console.log("Error while get all the points history: ", err))
  },[]);

  useEffect(() => {
  if (users.length > 0) {
    setLastUpdate(getLatestUpdateTime(users));
  }
}, [users]);

  return (
    <MyContext.Provider value={{ users, setUsers, pointsHistory, setPointsHistory, lastUpdate }}>
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