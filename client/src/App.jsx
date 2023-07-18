import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import "./App.css";
import Auth from "./components/Auth";

const App = () => {
  const userEmail = "Veikka.puolitaival@gmail.com";
  const [tasks, setTasks] = useState([]);

  const authToken = true;

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  // Sort by date
  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && <ListHeader listName="Shopping list" getData={getData} />}
      {sortedTasks.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </div>
  );
};

export default App;
