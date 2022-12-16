import React from "react";
import { Fade } from "react-awesome-reveal";

export function Describtion() {

  return (
  
    <div className="skillsBackground">
    <div className="skills">
    <h1 className=" whatICan">Discover what I can do</h1>
    <Fade cascade damping={0.5} triggerOnce>
    <div className="textSkillSet">
    <p className="mySkillSet">
    From a very young age, I have been passionate about technology. The creation of projects is nourished by my continual need to express my creativity. I am curious by nature and I am not afraid to venture into areas that I do not master. With my perseverance and my thirst for learning I take up every challenge, that's how my ideas come to life. Below are all the skills I have acquired on my journey.
    </p>
    </div>
    </Fade>
    <div className="lineDesc"></div>
    </div>
    </div>
   
  )

}