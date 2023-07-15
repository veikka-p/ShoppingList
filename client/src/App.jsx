import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListHeader from './components/ListHeader';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <ListHeader listName={"Holiday tick list"} />
    </div>
  )
}

export default App;