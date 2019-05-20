import React from 'react';
import AppNavbar from './components/AppNavbar'
import Project from './components/Project'
import Landing from './components/Landing'
import About from './components/About'

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <AppNavbar/>
    </div>
    <Route path="/" exact component={Landing} />
    <Route path="/about/" component={About} />
    <Provider store={store}>
    <Route path="/projects/" component={Project} />
    </Provider>
    </Router>
  );
}

export default App;
