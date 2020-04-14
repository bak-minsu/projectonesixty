import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ContentDiv({children, id, otherClasses}) {
  let classes = "content-div " + otherClasses
  return(
    <div className={classes} id={id}>
      {children}
    </div>
  )
}

function Title({children}) {
  return (
    <h1 className="title media-changes">{children}</h1>
  )
}

function TextContent({children}) {
  return (
    <p className="text-content">{children}</p>
  )
}
  
function Footer() {
  return (
    <footer className="footer">
      Copyright © 2020
    </footer>
  )
}

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

export {ContentDiv, Title, TextContent, Footer, GoTopButton}