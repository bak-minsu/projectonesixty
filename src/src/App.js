import React from 'react';
import './App.css';
import { FaHome, FaHotel, FaArrowUp, FaBook } from 'react-icons/fa';
import { 
  camera, 
  flower, 
  henderson, 
  luft, 
  mccauley, 
  park, 
  yao 
} from "./Images.js";
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

function ContentDiv({children, id, otherClasses}) {
  let classes = "content-div " + otherClasses
  return(
    <div className={classes} id={id}>
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

  render() {
    const lastNameMap = {
      "henderson": {
        image: henderson, 
        name: "Naomi Henderson", 
        title: "Head Content Writer", 
        description: "Main writer and organizer of main website content."
      },
      "luft": {
        image: luft, 
        name: "Timothy Luft", 
        title: "Storyboard Designer and Editor", 
        description: "Created storyboard and edited final draft."
      },
      "mccauley": {
        image: mccauley, 
        name: "Ryan McCauley", 
        title: "Website Designer", 
        description: "Designed website layout and functionality."
      },
      "park": {
        image: park, 
        name: "Min Su Park", 
        title: "Web Developer", 
        description: "Programmed and implemented website design."
      },
      "yao": {
        image: yao, 
        name: "Rachel Yao", 
        title: "Lead Cartoonist", 
        description: "Sketched main comics of the site based on storyboard."
      }
    }
    let lastnames = ["henderson", "luft", "mccauley", "park", "yao"]
    let pictures = []
    for (const [index, lastname] of lastnames.entries()) {
      let selected = (this.state.selected === lastname);
      let picture = <AuthorPicture 
                      selected={selected} 
                      lastname={lastname}
                      onClick={this.openDescription.bind(this, lastname)}
                      map={lastNameMap[lastname]}
                      key={index}
                    />;
      pictures.push(picture);
    }
    return (
      <div id="description-div">
        <div id="authors">
          {pictures}
        </div>
        <Description selected={this.state.selected} map={lastNameMap[this.state.selected]}/>
      </div>
    )
  }
}

function AuthorPicture({selected, onClick, map}){
  let image = map.image;
  let name = map.name;
  let selectedClass = selected ? "selected" : "";
  return (
    <button className={"author-button"} onClick={onClick}>
      <div className={"author-picture " + selectedClass}>
        <img src={image} alt={map.name}/>
      </div>
      <p className={"author-name"}>{name}</p>
    </button>
  )
}

function Description({selected, map}){
  let hidden = null;
  let name = null;
  let title = null;
  let description = null;
  if(selected != null){
    name = map.name;
    title = map.title;
    description = map.description;
    hidden = ""
  } else {
    hidden = "hidden"
  }
  return (
    <div className={"about-description " + hidden}>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Sources(){
  const sources = [
    {
      title: "Gender Bias in the Purchase of STEM-Related Toys",
      url: "https://www.asee.org/public/conferences/56/papers/14121/download",
      shortcut: "toys",
    },
    {
      title: "Gender Bias in the Purchase of STEM-Related Toys",
      url: "https://www.asee.org/public/conferences/56/papers/14121/download",
      shortcut: "toys1",
    },
    {
      title: "Gender Bias in the Purchase of STEM-Related Toys",
      url: "https://www.asee.org/public/conferences/56/papers/14121/download",
      shortcut: "toys2",
    },
  ]
  const sourceDivs = sources.map( (source, key) =>
    <Source key={key} source={source}/>
  );
  return (
    <div id="sources-div">
      {sourceDivs}
    </div>
  );
}

class Source extends React.Component {
  openLink(link){
    window.open(link);
  }

  getTag(){
    const url = window.location.href;
    const tag_index = url.indexOf("#", 0);
    return url.substring(tag_index+1);
  }

  render() {
    const title = this.props.source.title;
    const shortcut = this.props.source.shortcut;
    const url = this.props.source.url;
    const tag = this.getTag();
    const selected = (tag === shortcut) ? "selected" : "";
    return (
      <button className="sources-button" onClick={this.openLink.bind(this, url)}>
        <ContentDiv id={shortcut} otherClasses={"sources-content border " + selected}>
          <Title>{title}</Title>
          <TextContent></TextContent>
        </ContentDiv>
      </button>
    )
  }
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
