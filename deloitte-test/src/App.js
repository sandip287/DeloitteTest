import React from 'react';
import './App.css';
import Login from './Components/Login/login';
import { Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Register from './Components/Registration/Register';
import HomeScreen from './Components/HomeScreen/HomeScreen';

const history = createHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Register} />
          <Route exact path="/home" component={HomeScreen} />
        </div>
      </Router>          
    </div>
  );
}
export default App;
