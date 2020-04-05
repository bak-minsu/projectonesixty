import React from 'react';
import './App.css';
import camera from './img/camera.png';
import flower from './img/flower.png';
import park from './img/park.jpg';
import notfound from "./img/notfound.png";
import { FaHome, FaHotel, FaArrowUp, FaBook } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

function TopArea() {
  return (
    <header>
      <div id="toparea" className="border">
        <h1>HST 160 What-If Project</h1>
      </div>
      <NavBar/>
    </header>
  )
}

function NavBar() {
  return (
    <nav>
      <NavButton icon={<FaHome/>} text={"Home"} route={"/"}/>
      <NavButton icon={<FaHotel/>} text={"About"} route={"/about"}/>
      <NavButton icon={<FaBook/>} text={"Sources"} route={"/sources"}/>
    </nav>
  )
}

function NavButton({text, route, icon}) {
  return (
    <Link to={route}>
      <div className="nav-button">
        {icon}
        <p>{text}</p>
      </div>
    </Link>
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

function ComicPanel({image, alt}){
  return (
    <div className="img-div">
      <img src={image} alt={alt}></img>
    </div>
  )
}

function Title({children}) {
  return (
    <h1 className="title">{children}</h1>
  )
}

function TextContent({children}) {
  return (
    <p className="text-content">{children}</p>
  )
}

function MainContent() {
  return (
    <ContentDiv otherClasses={"main-content border"}>
      <Title>What If?</Title>
      <TextContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in malesuada libero, eget laoreet lectus. Aliquam finibus dapibus ligula, sit amet tincidunt dui posuere non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer porttitor tempus tortor ut dictum. Maecenas placerat orci sit amet nisi luctus, porta euismod ipsum sagittis. Nullam nec malesuada diam. Suspendisse eget ante urna.</TextContent>
      <ComicPanel image={camera} alt={"camera"}/>
      <TextContent>Ut aliquet felis feugiat lorem posuere, id vulputate leo fermentum. Suspendisse vestibulum dolor odio, vitae sollicitudin quam mattis id. Etiam eget eleifend est. Aliquam at iaculis justo. Aenean pulvinar molestie eleifend. Aliquam egestas dignissim mollis. Suspendisse semper risus quis neque ultrices ultricies.</TextContent>
      <ComicPanel image={flower} alt={"flower"}/>
      <TextContent>Nunc at magna eleifend, luctus lorem vel, bibendum odio. Quisque egestas quam faucibus libero cursus rutrum. Sed a metus placerat, pulvinar nisi at, finibus urna. Duis malesuada quis felis vel tempus. Morbi massa ex, aliquet eget erat eu, tincidunt pulvinar nunc. Quisque lorem est, sollicitudin eget sagittis vitae, faucibus aliquam sapien. Pellentesque vulputate neque diam, ac cursus lorem commodo nec. Curabitur et mauris vitae felis fermentum iaculis. Sed eu urna at nibh convallis sagittis ut eget neque. Vivamus fringilla mauris blandit felis maximus, vel efficitur nisi condimentum. Aliquam vel purus augue. Fusce nulla quam, tempor ac sagittis vel, luctus at quam. Mauris sagittis ac sem vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas urna risus, sit amet rutrum est mollis vitae.</TextContent>
    </ContentDiv>
  )
}

// Members: Naomi Henderson, Timothy Luft, Ryan McCauley, Min Park, Rachel Yao
// About Page functions

function About(){
  return (
    <ContentDiv otherClasses={"about-content border"}>
      <Title>About Our Team</Title>
      <Authors/>
    </ContentDiv>
  )
}

class Authors extends React.Component {
  constructor(){
    super();
    this.state = {
      selected: null
    }
    this.lastNameMap = {
      "henderson": {
        image: notfound, 
        name: "Naomi Henderson", 
        title: "Content Writer", 
        description: "N/A"
      },
      "luft": {
        image: notfound, 
        name: "Timothy Luft", 
        title: "Storyboard Designer", 
        description: "N/A"
      },
      "mccauley": {
        image: notfound, 
        name: "Ryan McCauley", 
        title: "Website Designer", 
        description: "N/A"
      },
      "park": {
        image: park, 
        name: "Min Su Park", 
        title: "Web Developer", 
        description: "N/A"
      },
      "yao": {
        image: notfound, 
        name: "Rachel Yao", 
        title: "Lead Cartoonist", 
        description: "N/A"
      }
    }
  }

  openDescription(lastname){
    if(this.state.selected === null){
      // If nothing was selected
      this.setState({selected: lastname});
    } else if(this.state.selected === lastname){
      // If the same name was selected
      this.setState({selected: null});
    } else {
      this.setState({selected: lastname});
    }
  }

  description(){
    return <Description hidden={(this.state.selected === null)} lastname={this.state.selected} lastNameMap={this.lastNameMap}/>
  }

  render() {
    let lastnames = ["henderson", "luft", "mccauley", "park", "yao"]
    let pictures = []
    for (const [index, value] of lastnames.entries()) {
      let selected = (this.state.selected === value);
      pictures.push(<AuthorPicture selected={selected} lastname={value} onClick={this.openDescription.bind(this, value)} lastNameMap={this.lastNameMap} key={index}/>)
    }
    return (
      <div id="description-div">
        <div id="authors">
          {pictures}
        </div>
        {this.description()}
      </div>
    )
  }
}

function AuthorPicture({selected, lastname, onClick, lastNameMap}){
  let image = lastNameMap[lastname].image;
  let name = lastNameMap[lastname].name;
  let selectedClass = selected ? "selected" : "";
  return (
    <button className={"author-button"} onClick={onClick}>
      <div className={"author-picture " + selectedClass}>
        <img src={image} alt={lastname}/>
      </div>
      <p className={"author-name"}>{name}</p>
    </button>
  )
}

function Description({lastname, lastNameMap, hidden}){
  let className = null;
  let name = null;
  let title = null;
  let description = null;
  if(!hidden){
    name = lastNameMap[lastname].name;
    title = lastNameMap[lastname].title;
    description = lastNameMap[lastname].description;
    className = ""
  } else {
    className = "hidden-description"
  }
  return (
    <div className={"about-description " + className}>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Sources(){
  return (
    <div id="sources-div">
      <ContentDiv otherClasses={"sources-content border"}>
        <Title>Source 1</Title>
        <TextContent></TextContent>
      </ContentDiv>
      <ContentDiv otherClasses={"sources-content border"}>
        <Title>Source 2</Title>
        <TextContent></TextContent>
      </ContentDiv>
      <ContentDiv otherClasses={"sources-content border"}>
        <Title>Source 3</Title>
        <TextContent></TextContent>
      </ContentDiv>
    </div>
  )
}

// Go to top button

class GoTopButton extends React.Component {
  componentDidMount() {
    const button = document.getElementById("go-top");

    const topFunction = () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    button.onclick = topFunction;

    const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    }
    window.onscroll = scrollFunction;
  }

  render() {
    return (
      <button id="go-top" title="Go to the Top">
        <FaArrowUp/>
      </button>
    )
  }
}

function Footer() {
  return (
    <footer className="footer">
      Copyright © 2020
    </footer>
  )
}

export default App;
