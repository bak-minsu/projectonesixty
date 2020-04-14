import React from 'react';
import { FaLink } from 'react-icons/fa';
import {ContentDiv, Title} from './Common.js';

class ReturnToHome extends React.Component {
  returnToHome() {
    window.location.href = "/#" + sessionStorage.getItem("return");
  }

  render() {
    let hidden = null;
    if(sessionStorage.getItem("return") === "null" || sessionStorage.getItem("return") === null) {
      hidden = "hidden";
    }
    return (
      <div id="return-home" className={hidden}>
        <button onClick={this.returnToHome.bind(this)}>Return To Comic</button>
      </div>
    )
  }
}

class Sources extends React.Component{
  componentDidMount() {
    const tag = sessionStorage.getItem("goto");
    document.querySelector(`#${tag}`).scrollIntoView();
  }

  componentWillUnmount() {
    sessionStorage.setItem("return", null);
    sessionStorage.setItem("goto", null);
  }

  render() {
    const sources = [
      {
        title: "FDR Grew Up in a Dress: It Wasn't Always Blue for Boys and Pink for Girls",
        url: "https://www.theatlantic.com/national/archive/2011/04/fdr-grew-up-in-a-dress-it-wasnt-always-blue-for-boys-and-pink-for-girls/237299/",
        shortcut: "dress",
      },
      {
        title: "Are gendered toys harming childhood development?",
        url: "https://www.theguardian.com/lifeandstyle/2016/may/28/toys-kids-girls-boys-childhood-development-gender-research",
        shortcut: "harm",
      },
      {
        title: "Gender similarities in the brain during mathematics development",
        url: "https://www.nature.com/articles/s41539-019-0057-x",
        shortcut: "brain",
      },
      {
        title: "STEM Toys",
        url: "https://www.scientificsonline.com/page/what-are-stem-toys",
        shortcut: "stem-toys",
      },
      {
        title: "Gender Bias in the Purchase of STEM-Related Toys",
        url: "https://www.asee.org/public/conferences/56/papers/14121/download",
        shortcut: "bias",
      },
    ]
    const sourceDivs = sources.map( (source, key) =>
      <Source key={key} source={source}/>
    );
    return (
      <div id="sources-div">
        <ReturnToHome/>
        {sourceDivs}
      </div>
    );
  }
}

function LinkIcon() {
  return (
    <div className="link-icon">
      <FaLink/>
    </div>
  )
}

class Source extends React.Component {
  openLink(link){
    window.open(link);
  }

  getTag(){
    return sessionStorage.getItem("goto");
  }

  render() {
    const title = this.props.source.title;
    const shortcut = this.props.source.shortcut;
    const url = this.props.source.url;
    const tag = this.getTag();
    const selected = (tag === shortcut) ? "selected" : "";
    return (
      <button id={shortcut} className={"sources-button media-changes " + selected} onClick={this.openLink.bind(this, url)}>
        <LinkIcon/>
        <ContentDiv otherClasses="sources-content border">
          <Title>{title}</Title>
        </ContentDiv>
      </button>
    )
  }
}
export default Sources;