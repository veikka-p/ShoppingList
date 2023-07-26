import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Tickicon from "./Tickicon";
import Modal from "./Modal";

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteToDo = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_EXPRESS_APP_URL}/todos/${task.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Todo deleted successfully");
        getData();
      } else {
        console.log("An error occurred while deleting the todo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className="list-item">
      <div className="info-container">
        <Tickicon />
        <p>{task.title}</p>
        {/* <ProgressBar progress={task.progress} /> */}
      </div>
      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          EDIT
        </button>
        <button className="delete" onClick={deleteToDo}>
          DELETE
        </button>
      </div>
      {showModal && (
        <Modal
          mode="edit"
          setShowModal={setShowModal}
          getData={getData}
          task={task}
        />
      )}
    </li>
  );
};

export default ListItem;
