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
      <ProgramSubtitle src="/images/swift.png" text="Swift storyboard"/>
      <ProgramSubtitle src="/images/swiftui.png" text="Swift UI"/>
      <ProgramSubtitle src="/images/objective-c-logo.png" text="Objective-C"/>
      
      <div className="projectsIos">
      <SeeProjectsButton src="/images/right-arrow.png" text="Explore my apps" />
      </div>
    </div>
    </div>
    <img className="iphoneExample" src={"/images/iPhonePortfolio.png"} alt="" />
    </div>

    </div>
    </div>
  )

}