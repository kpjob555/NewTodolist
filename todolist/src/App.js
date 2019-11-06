import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Todolists from './container/todolist/Todolists';
import Header from './components/Header/Header';
import './App.css';

const App = () => {
  return <div>
    <BrowserRouter>
      <Header />
      <Todolists />
    </BrowserRouter>
  </div>
}

export default App;
