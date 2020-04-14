import React from 'react';
import {ContentDiv, Title} from './Common.js';
import {
  henderson, 
  luft, 
  mccauley, 
  park, 
  yao
} from "../img/Images.js";


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

export default About;