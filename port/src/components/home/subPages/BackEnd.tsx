import React from "react";
import { Fade } from "react-awesome-reveal";
import { ProgramSubtitle } from "../ProgramSubtitle";
import { SeeProjectsButton } from "../SeeProjectsButton";


export function BackEnd() {

  return (
    <div className="iOSBackground">
    <div className="iOS">
    <h2 className="backendDevelopmentSubtitle">Web Development</h2>
    <h1 className="iOSDeveloperTitle">Back-end Developer</h1>
    <div className="backendTools">
      <Fade cascade damping={0.3} triggerOnce>
      <ProgramSubtitle src="/images/node-js.png" text="Node"/>
      <ProgramSubtitle src="/images/express.png" text="Express"/>
      <ProgramSubtitle src="/images/php.png" text="PHP"/>
      <ProgramSubtitle src="/images/laravel.png" text="Laravel"/>
      <ProgramSubtitle src="/images/kotlin.png" text="Kotlin"/>
      </Fade>
      <div className="projectsBackend">
      <SeeProjectsButton src="/images/red-arrow.png" text="Explore my websites" />
      </div>
    </div>

    </div>
    </div>
  )

}