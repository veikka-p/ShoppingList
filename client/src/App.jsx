import React, { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import "./App.css";
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["Email", "AuthToken"]);
  const userEmail = cookies.Email;
  const authToken = cookies.AuthToken;
  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_EXPRESS_APP_URL}/todos/${userEmail}`
      );
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, [authToken]);

  // Sort by date
  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader listName="ToDoList" getData={getData} />
          <p className="user-email">Welcome back {userEmail}</p>
          {sortedTasks.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </>
      )}
      <div className="copyright">
        Created by{" "}
        <a href="https://veikkap.com" target="_blank" className="link">
          Veikkap
        </a>
      </div>
    </div>
  );
};

export default App;
