import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContent/>
    </div>
  );
}

function NavBar() {
  return (
    <nav></nav>
  )
}

function ContentDiv({children, otherClasses}) {
  let classes = "content-div " + otherClasses
  return(
    <div className={classes}>
      {children}
    </div>
  )
}

function MainContent() {
 return (
  <ContentDiv otherClasses={"main-content"}>
    <h1>What If?</h1>
  </ContentDiv>
 )
}

export default App;
