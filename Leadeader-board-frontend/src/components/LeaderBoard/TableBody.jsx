import React, { useEffect, useState } from 'react'
import "./LeaderBoard.css"

import { FaHistory, FaTrophy, FaMedal} from "react-icons/fa";

const TableBody = (user) => {
    let rank = user.idx + 1;
    let [style, setStyle] = useState('rankCellClass');
    let [rankCellContent, setRankCellContent] = useState(rank);
    useEffect(() => {
        if (rank === 1) {
            setStyle('rankCellClass medal-gold');
            setRankCellContent(<div><FaTrophy /> {rank}</div>);
        } else if (rank === 2) {
            setStyle('rankCellClass medal-silver');
            setRankCellContent(<div><FaMedal /> {rank}</div>);
        } else if (rank === 3) {
            setStyle('rankCellClass medal-bronze');
            setRankCellContent(<div><FaMedal /> {rank}</div>);
        } else {
            setStyle('rankCellClass');
            setRankCellContent(rank);
        }
    }, [rank]);
    
    return (
        <tr className='fade-in'>
            <td className={style}>{rankCellContent}</td>
            <td className="cell-user">
                <div className="user-wrapper">
                    <div className="user-avatar">
                        <span className="user-initial">{user.userName.charAt(0)}</span>
                    </div>
                    <div className="user-info">
                        <div className="user-name">{user.userName}</div>
                        <div className="user-id">ID: {user.userId}</div>
                    </div>
                </div>
            </td>

            <td className="cell-points">
                <div className="user-points">{user.points}</div>
            </td>

            <td className="cell-action">
                <button onClick={() => user.showUserHistory(user._id)} className="btn-history">
                    <FaHistory /> View
                </button>
            </td>
        </tr>

    )
}

export default TableBody