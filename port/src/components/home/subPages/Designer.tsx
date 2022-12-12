import React from "react";
import { CircularElements } from "../CircularElements";
import { SeeProjectsButton } from "../SeeProjectsButton";

export function Designer() {

  return (
    <div className="iOSBackground">
    <div className="iOS">
    <h2 className="designerSubtitle">Design</h2>
    <h1 className="iOSDeveloperTitle">UI/UX Designer</h1>
    <div className="designContainer">
      <div className="designerTools">
      <CircularElements src="/images/xd.png" text="Adobe Xd" />
      <CircularElements src="/images/photoshop.png" text="Adobe Photoshop" />
      <CircularElements src="/images/illustrator.png" text="Adobe Illustrator" />
      <CircularElements src="/images/figma.png" text="Figma" />
      </div>
      <div className="projectsDesign">
      <SeeProjectsButton src="/images/blue-arrow.png" text="Explore my designs" />
      </div>
    </div>
    <div className="footerLine"></div>
    </div>
    </div>
  )

}