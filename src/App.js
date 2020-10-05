import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import UpComponent from './components/UpComponent';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Login />
        </div>
        <Switch>
          <Route exact path='/' exact component={Login} />
          <Route exact path='/dashboard' exact component={Dashboard} />
          <Route exact path='/update/:id' exact component={UpComponent} />
        </Switch>
      </Router>


    </Provider>

  );
}

export default App;
