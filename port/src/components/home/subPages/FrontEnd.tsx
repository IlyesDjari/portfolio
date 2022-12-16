import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { SeeProjectsButton } from "../SeeProjectsButton";

export default function FrontEnd() {
  return (
    <div className="iOSBackground">
    <div className="iOS">
    <h2 className="frontEndDevelopmentSubtitle">Web Development</h2>
    <h1 className="iOSDeveloperTitle">Front-end Developer</h1>

    <div className="frontEndElements">
    <Fade cascade damping={0.3} triggerOnce>

    <div className="htmlFront">
    <img src={'/images/html.png'} alt="Html" />
      <h2>HTML</h2>
    </div>

    <div className="cssFront">
    <img src={'/images/css.png'} alt="Css" />
    <h2>CSS</h2>
    </div>

    <div className="jsFront">
    <img src={'/images/js.png'} alt="JavaScript" />
    <h2>JavaScript</h2>
    </div>

    <div className="tsFront">
    <img src={'/images/typescript.png'} alt="JavaScript" />
    <h2>TypeScript</h2>
    </div>

    <div className="reactFront">
    <img src={'/images/physics.png'} alt="JavaScript" />
    <h2>React</h2>
    </div>

    <div className="angularFront">
    <img src={'/images/angular.svg'} alt="JavaScript" />
    <h2>Angular</h2>
    </div>
    </Fade>

    <Slide damping={0.3} triggerOnce>
    <div className="projectsFrontEnd">
    <SeeProjectsButton src="/images/purple-arrow.png" text="Explore my websites" />
      </div>
      </Slide>
    </div>

    </div>
    
    </div>
  )
}