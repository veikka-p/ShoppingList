import React, { useState } from "react";
import { useCookies } from "react-cookie";

function Modal({ mode, setShowModal, getData, task }) {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const editMode = mode === "edit";
  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email,
    title: editMode ? task.title : "",
    progress: editMode ? task.progress : 0,
    date: editMode ? task.Date : new Date(),
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_EXPRESS_APP_URL}/todos`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 200) {
        console.log("Todo created successfully");
        setShowModal(false);
        getData();
      } else {
        console.log("An error occurred while creating the todo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_EXPRESS_APP_URL}/todos/${task.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 200) {
        console.log("Todo updated successfully");
        setShowModal(false);
        getData();
      } else {
        console.log("An error occurred while updating the todo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          {/* <label htmlFor="range">Drag to select your current progress</label>
          <input
            required
            type="range"
            min="0"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          /> */}
          <input
            className={editMode ? "edit" : ""}
            type="submit"
            onClick={editMode ? editData : postData}
          />
        </form>
      </div>
    </div>
  );
}

export default Modal;
