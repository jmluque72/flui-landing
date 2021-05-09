import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Pages/Main.css'
import Home from './Pages/HomeView'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.min.css';


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")

)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
