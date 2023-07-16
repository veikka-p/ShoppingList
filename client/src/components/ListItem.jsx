import React from "react";
import ProgressBar from "./ProgressBar";
import Tickicon from "./Tickicon";

const ListItem = ({ task }) => {
  return (
    <li className="list-item">
      <div className="info-container">
        <Tickicon />
        <p>{task.title}</p>
        <ProgressBar />
      </div>

      <div className="button-container">
        <button className="edit">EDIT</button>
        <button className="delete">DELETE</button>
      </div>
    </li>
  );
};

export default ListItem;
