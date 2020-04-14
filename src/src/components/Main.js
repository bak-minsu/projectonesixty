import React from 'react';
import ReactTooltip from 'react-tooltip';
import {ContentDiv, Title, TextContent} from './Common.js';
import { Link } from "react-router-dom";
import { 
  boy_toys,
  doll,
  fdr_old,
  fdr_young,
  math,
  dollhouse,
  fdr_baby_photo,
  toy1,
  toy2,
  toy3,
  barbie,
  truck
} from "../img/Images.js";

function ComicPanel({images, alt}){
  let images_render = null;
  if(typeof(images) === "object"){
    images_render = images.map( (image, key) =>
      <img key={key} src={image} alt={alt}></img>
    )
  } else {
    images_render = (<img src={images} alt={alt}></img>);
  }
  return (
    <div className="comic-div">
      {images_render}
    </div>
  )
}

function ImagePanel({images, alt}) {
  let images_render = null;
  if(typeof(images) === "object"){
    images_render = images.map( (image, key) =>
      <img key={key} src={image} alt={alt}></img>
    )
  } else {
    images_render = (<img src={images} alt={alt}></img>);
  }
  return (
    <div className="image-panel">
      {images_render}
    </div>
  )
}

class SourceLink extends React.Component {
  goToSource(source_id, return_id){
    sessionStorage.setItem("goto", source_id);
    sessionStorage.setItem("return", return_id);
  }

  render() {
    let children = this.props.children;
    let source_id = this.props.source_id;
    let return_id = this.props.return_id;
    return (
      <Link id={return_id} data-tip="Link to Source" to={"/sources"} className="source-link" onClick={this.goToSource.bind(this, source_id, return_id)}>
        {children}
      </Link>
    )
  }
}

class Video extends React.Component {

  render() {
    return (
      <iframe title="youtube-video" id="video" src="https://www.youtube.com/embed/3M0dqXM0gkQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );
  }
}

class MainContent extends React.Component {
  componentDidMount() {
    sessionStorage.setItem("return", null);
    sessionStorage.setItem("goto", null);
  }

  render() {
    return (
      <ContentDiv otherClasses={"main-content border"}>
        <Title>
          Toys and Math
        </Title>
        <TextContent>
          <strong>
            What if boys and girls were raised to play with toys marketed toward the opposite gender? Would it affect their lives in a big way, if at all?
          </strong>
        </TextContent>
        <ComicPanel images={fdr_old} alt={"FDR when he was old"}/>
        <TextContent>
          Seems silly to think about at first glance, but it’s also pretty silly to think about the (very true) fact that Franklin Delano Roosevelt used to wear dresses during his early childhood.
        </TextContent>
        <ComicPanel images={fdr_young} alt={"FDR when he was young"}/>
        <TextContent>
          <SourceLink source_id="dress" return_id="normal">
            This was pretty normal at the time because dresses were considered gender-neutral clothing for children during the 1800s.
          </SourceLink>
          1800s kids wore dresses until age 6, which is also when they got their first haircut. Society’s move toward pink and blue clothing for girls and boys, respectively, came about in the mid-1800s. It still took a long time for it to be woven into pop culture (hence young FDR pictured in a dress in the year 1884) 
        </TextContent>
        <ImagePanel images={fdr_baby_photo} alt={"FDR when he was young"}/>
        <TextContent>
          <strong>
            So where do toys fit into the equation?
          </strong>
        </TextContent>
        <TextContent>
          Examining advertisements from the 1970s shows kids playing with a wide variety of toys in bright happy colors like red, green, or yellow. 
        </TextContent>
        <ImagePanel images={[toy1, toy2, toy3]} alt={"FDR when he was young"}/>
        <TextContent>
          Some recognizable toys that fit the bill include LEGOs, Hungry Hungry Hippo, Twister, Rock ‘Em Sock ‘Em Robots, and Rubik’s Cube. 
          <SourceLink source_id="harm" return_id="segregated">
            By the 1980s and 1990s, it was found that toys started to become more gender segregated as a result of the backlash from the feminist movement.
          </SourceLink>
        </TextContent>
        <TextContent>
          <strong>
            Well where the hell does math fit into all this?
          </strong>
        </TextContent>
        <TextContent>
          If only toy advertisers back then knew the effects that this would have on the future of STEM. Hmmm, what do I mean you ask? What if children today all dressed in the standardized children’s clothes of the 1800s and What if boys and girls all played with the same toys?
        </TextContent>
        <ComicPanel images={dollhouse} />
        <TextContent>
          We would find that boys and girls aren’t that different in the early stages of their lives, if at all. This even applies to the development of math skills. (Link study Carnegie Mellon Study). This is a pretty cool new finding, since a number of scientists and public figures have cited neuroscience studies as explaining the gender disparity in STEM. 
        </TextContent>
        <TextContent>
          <SourceLink source_id="brain" return_id="brain-activity">
            Studies have shown that brain activity in both men and women of all ages is similar when watching videos on math topics like counting and addition. 
          </SourceLink>
          There’s also no disparity in the rate at which kids and adults, regardless of gender or age, process mathematics skills. Furthermore, mathematical development is the same for both genders.
        </TextContent>
        <ComicPanel images={math} />
        <TextContent>
          <strong>
            Ok… so where do toys come back into the equation?
          </strong>
        </TextContent>
        <TextContent>
          <SourceLink source_id="bias" return_id="underrepresented">
            Research suggests that females are underrepresented in STEM fields as a result of access to different kinds of toys than males. 
          </SourceLink>
          Imagine both boys and girls played with STEM toys growing up? This might be able to even out the difference! A STEM toy is any toy that improves or encourages spatial/mechanical learning and/or sparks curiosity, learning, and education relating to STEM. 
          <SourceLink source_id="stem-toys" return_id="stem-toys">
            Some common STEM toys include building block/tower sets, chemistry kits, robot kits, coding toys, train sets and telescopes. 
          </SourceLink>
        </TextContent>
        <TextContent>
          <strong>
            What does access have to do with it? 
          </strong>
        </TextContent>
        <TextContent>
          Access to toys becomes an issue when we look at the way toys are marketed. Walking down toy aisles today, there’s a very obvious segregation: there’s an aisle with toys that are mostly blue marketed toward boys and there’s an aisle with toys that are mostly pink marketed toward girls.
        </TextContent>
        <ImagePanel images={[barbie, truck]} alt="Pink vs Blue"/>
        <TextContent>
          The purchasing pattern of adults may also be to blame for gender discrepancies in STEM. Early development of science and math skills through playing with STEM toys has been challenging for girls because of the 
          <SourceLink source_id="bias" return_id="purchasing-pattern">
            purchasing patterns of adults. 
          </SourceLink>
          Researchers analyzed an entire dataset of customer reviews on specific STEM toys across MindWare.com and Amazon.com. Of course this is not the sole source of a child’s learning experiences, but it can be a pretty cool place to start when it comes to thinking about STEM education.
        </TextContent>
        <ComicPanel images={[doll, boy_toys]} alt="Pink vs Blue"/>
        <TextContent>
          <strong>
            The big question: What if boys and girls are raised with toys that are marketed gender-neutrally?
          </strong>
        </TextContent>
        <TextContent>
          In response to a 2016  conference about gender stereotypes in toys and media, Target has announced that they were getting rid of signs labeling toys for girls or for boys. Experts say that babies don’t show preference for certain toys over others and that it’s only once children learn about their own gender that they gain preferences. 
          <SourceLink source_id="harm" return_id="preference">
            So, the way toys are marketed may have an influence in the development of a child’s toy preference.  
          </SourceLink>
          Source - the guardian. Today, the UK’s “Let Toys Be Toys” campaign has expanded by making its mission to get both toy and publishing industries to “stop limiting children’s interests by promoting some toys and books and boys as only suitable for girls, and others only for boys. 
        </TextContent>
        <TextContent>
          I don’t have an exact answer to this question but maybe we can begin to find the answer to if we “let toys be toys,” 
        </TextContent>
        <Video/>
        <ReactTooltip place="right" effect="solid"/>
      </ContentDiv>
    )
  }
}

  export default MainContent