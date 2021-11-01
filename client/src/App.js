import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from './Login';
import welcome from './welcome';
function App() {
  return (
    <>
    <Router>
    <Switch>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/welcome">
          <welcome />
          </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
