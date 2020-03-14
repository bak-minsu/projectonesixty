import React from 'react';
import './App.css';
import camera from './img/camera.png'
import flower from './img/flower.png'

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
    <nav>
      <h1>Sample Nav Title</h1>
    </nav>
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
    <Title>What If?</Title>
    <TextContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in malesuada libero, eget laoreet lectus. Aliquam finibus dapibus ligula, sit amet tincidunt dui posuere non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer porttitor tempus tortor ut dictum. Maecenas placerat orci sit amet nisi luctus, porta euismod ipsum sagittis. Nullam nec malesuada diam. Suspendisse eget ante urna.</TextContent>
    <Image image={camera} alt={"camera"}/>
    <TextContent>Ut aliquet felis feugiat lorem posuere, id vulputate leo fermentum. Suspendisse vestibulum dolor odio, vitae sollicitudin quam mattis id. Etiam eget eleifend est. Aliquam at iaculis justo. Aenean pulvinar molestie eleifend. Aliquam egestas dignissim mollis. Suspendisse semper risus quis neque ultrices ultricies.</TextContent>
    <Image image={flower} alt={"flower"}/>
    <TextContent>Nunc at magna eleifend, luctus lorem vel, bibendum odio. Quisque egestas quam faucibus libero cursus rutrum. Sed a metus placerat, pulvinar nisi at, finibus urna. Duis malesuada quis felis vel tempus. Morbi massa ex, aliquet eget erat eu, tincidunt pulvinar nunc. Quisque lorem est, sollicitudin eget sagittis vitae, faucibus aliquam sapien. Pellentesque vulputate neque diam, ac cursus lorem commodo nec. Curabitur et mauris vitae felis fermentum iaculis. Sed eu urna at nibh convallis sagittis ut eget neque. Vivamus fringilla mauris blandit felis maximus, vel efficitur nisi condimentum. Aliquam vel purus augue. Fusce nulla quam, tempor ac sagittis vel, luctus at quam. Mauris sagittis ac sem vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas urna risus, sit amet rutrum est mollis vitae.</TextContent>
  </ContentDiv>
 )
}

function Image({image, alt}){
  return (
    <div class="img-div">
      <img src={image} alt={alt}></img>
    </div>
  )
}

function Title({children}) {
  return (
    <h1 class="title">{children}</h1>
  )
}

function TextContent({children}) {
  return (
    <p class="text-content">{children}</p>
  )
}

export default App;
