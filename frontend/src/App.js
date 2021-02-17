import React from 'react'
import { Switch, Route } from 'react-router-dom'
import "bootswatch/dist/lux/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import Home from "./screens/Home";
import Create from "./screens/Create";
import Notes from "./screens/Notes";
import NotePage from './screens/NotePage';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/notes'>
          <Notes />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/notes/:id'>
          <NotePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
