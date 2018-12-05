import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import * as serviceWorker from './serviceWorker';

const Home =() => {
  return <h1>This is AvA Home Tallinn</h1>
}
const About =() => {
  return <h1>This is AvA About Tallinn</h1>
}
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Welcome} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
, document.getElementById('root'));

// <App /> If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
