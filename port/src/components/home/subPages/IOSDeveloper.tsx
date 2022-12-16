import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ProgramSubtitle } from "../ProgramSubtitle";
import { SeeProjectsButton } from "../SeeProjectsButton";

export function IOSDeveloper() {

  return (
    <div className="iOSBackground">
    <div className="iOS">
    <div className="iosContainer">
      <div className="itemsIos">
    <h2 className="mobileDevelopmentSubtitle">Mobile Development</h2>
    <h1 className="iOSDeveloperTitle">iOS Developer</h1>
   
    <div className="iosTools">
      <Fade cascade damping={0.3} triggerOnce>
      <ProgramSubtitle src="/images/swift.png" text="Swift storyboard"/>
      <ProgramSubtitle src="/images/swiftui.png" text="Swift UI"/>
      <ProgramSubtitle src="/images/objective-c-logo.png" text="Objective-C"/>
      </Fade>

    </div>
    </div>
     <Fade damping={0.8} triggerOnce>
    <img className="iphoneExample" src={"/images/iPhonePortfolio.png"} alt="" />
    </Fade>
    </div>
    <Slide cascade damping={0.3} triggerOnce>
    <div className="projectsIos">
      <SeeProjectsButton src="/images/right-arrow.png" text="Explore my apps" />
    </div>
    </Slide>
    </div>
    </div>
  )

}