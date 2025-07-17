import React, { useContext, useState } from 'react'
import "./LeaderBoard.css"
import TableBody from './TableBody';
import { MyContext } from '../../App';
import HistoryModel from './HistoryModel';




const LeaderBoard = () => {
    let { users, lastUpdate } = useContext(MyContext);
    let [show, setShow] = useState('');
    const handleShowUserHistory = (id) =>{
        setShow(id);
    }
    return (
        <div className="leader-board-container">
            <div className="board-sub1">
                <h2 className="board-sub1-heading">Leaderboard</h2>
                <div className="board-sub1-div">
                    <span className="update-time">Last updated:</span>
                    <span className="last-update">{lastUpdate}</span>
                </div>
            </div>

            <div className="board-sub2">
                <table className="board-sub2-table">
                    <thead >
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">User</th>
                            <th scope="col">Points</th>
                            <th scope="col">History</th>
                        </tr>
                    </thead>
                    <tbody id="leaderboardBody">
                        {[...users]
                            .sort((a, b) => b.points - a.points) // sort by points DESC
                            .map((user, idx) => (
                                <TableBody
                                    key={user._id}
                                    {...user}
                                    idx={idx}
                                    data={users}
                                    showUserHistory={handleShowUserHistory}
                                />
                            ))}
                    </tbody>
                </table>
            </div>

            {/* History Modal */}
            <HistoryModel 
                setShow={setShow}
                show={show}
            />

        </div>
    )
}

export default LeaderBoard
