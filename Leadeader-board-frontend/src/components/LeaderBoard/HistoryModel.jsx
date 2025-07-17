import React, { useContext } from "react";
import "./LeaderBoard.css";

import { FaTimes, FaPlus } from "react-icons/fa";
import { MyContext } from "../../App";

const HistoryModel = ({ show, setShow }) => {
  let { pointsHistory } = useContext(MyContext);
  let filterData = pointsHistory.filter(user => user.userId._id == show);
  return (
    <div className={`modal-overlay ${show ? "show" : ""}`}>
      <div className="modal-box">
        <div className="modal-header">
          <h3 className="modal-title">Point History</h3>
          <button className="modal-close" onClick={() => setShow(null)}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          {
            filterData.length > 0 ?
              <ul className="history-list">
                {
                  filterData
                    .map((user, idx) => {
                      let date = new Date(user.createdAt);
                      return (
                        <li key={`id_${idx}`}>
                          <div className="history-entry">
                            <div className="history-left">
                              <div className="history-icon">
                                <FaPlus style={{color:'green'}}/>
                              </div>
                              <div>
                                <p className="history-points">+{user.point} points</p>
                                <p className="history-date">{date.toLocaleString()}</p>
                              </div>
                            </div>
                            <div className="history-user">{user.userId.userName}</div>
                          </div>

                        </li>
                      )
                    })
                }
              </ul>
              :
              <ul className="history-list">
                <li style={{ textAlign: "center", color: "gray" }}>No history available</li>
              </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default HistoryModel;
