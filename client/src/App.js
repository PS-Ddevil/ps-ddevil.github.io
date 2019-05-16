import React from 'react';
import AppNavbar from './components/AppNavbar'
import Project from './components/Project'

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Project />
    </div>
    </Provider>
  );
}

export default App;
