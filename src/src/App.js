import React from 'react';
import TopArea from './components/TopArea';
import MainContent from './components/Main.js';
import About from './components/About.js';
import Sources from './components/Sources.js';
import {Footer, GoTopButton} from './components/Common.js';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopArea/>
        <Switch>
          <Route exact path="/" component={MainContent}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/sources" component={Sources}/>
        </Switch>
        <GoTopButton/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
