import React, { useContext, useRef, useState } from 'react'
import "./Sidebar.css"


import { FaPlus, FaGift } from "react-icons/fa";
import { MyContext } from '../../App';

const Sidebar = () => {
    let { users, setUsers, setPointsHistory, pointsHistory, setLastUpdate } = useContext(MyContext);
    // console.log(pointsHistory)
    let [selectedId, setSelectedId] = useState("");
    let nameRef = useRef();
    let messageRef = useRef();
    let timerRef = useRef(null);

    let messageFn = (msg, err) => {
        clearTimeout(timerRef.current);
        messageRef.current.style.display = "block";
        messageRef.current.innerText = msg;
        messageRef.current.style.color = err === "error" ? 'red' : "green";

        timerRef.current = setTimeout(() => messageRef.current.style.display = "none", 3000)
    }

    const addNewUserFn = () => {
        let name = nameRef.current.value.trim();
        if (!name) {
            messageFn(`Enter your name!`, 'error');
            nameRef.current.focus();
            return;
        }
        let newUser = {
            id: users.length + 1,
            name,
            points: 0,
        }
        setUsers([...users, newUser]);
        nameRef.current.value = "";
        messageFn(`User ${name.split(" ")[0].toUpperCase()} added successfuly✅`)
    }
    const claimBtnClick = () => {
        if (!selectedId) {
            messageFn("Please select a user to claim points!", "error");
            return;
        }
        let randomNum = Math.floor(Math.random() * 10) + 1;
        let idx = users.findIndex(user => user.id == selectedId);
        // if(idx == '-1'){
        //     messageFn('User not found!', "error");
        //     return;
        // }
        let user = users[idx];

        //Update Points History
        const historyEntry = {
            userId: user.id,
            name: user.name,
            points: randomNum,
            timestamp: new Date().toISOString()
        };
        setPointsHistory([...pointsHistory, historyEntry]);

        //update user
        let updatedUser = {
            ...user,
            points: Number(user.points) + randomNum
        }
        let newArr = [...users];
        newArr.splice(idx, 1, updatedUser);
        newArr.sort((a, b) => b.points - a.points)
        setUsers(newArr);
        let date = new Date();
        setLastUpdate(date.toLocaleTimeString())
        messageFn(`${updatedUser.name} earned ${randomNum} points 🎉`);
    }
    return (
        <div className='sidebar-container'>
            <h2 className="sidebar-heading">User Selection</h2>

            <div className="sidebar-sub1">
                <label className="dropdown-user">Select User</label>
                <div className="dropdown-user-div">
                    <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} className="dropdown-user-select" defaultValue="">
                        <option value="" disabled>Choose a user</option>
                        {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                    </select>

                </div>
            </div>

            <div className="sidebar-sub-2">
                <label className="add-user">Add New User</label>
                <div className="add-user-div">
                    <input ref={nameRef} type="text" id="newUserName" placeholder="Enter name" className="add-user-input" />
                    <button onClick={addNewUserFn} className="add-user-btn">
                        <FaPlus />
                    </button>
                </div>
            </div>

            <button onClick={claimBtnClick} className="claim-btn">
                <FaGift />
                Claim Points
            </button>

            <div ref={messageRef} className="claim-result"></div>
        </div>
    )
}

export default Sidebar