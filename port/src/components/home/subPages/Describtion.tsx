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
    I am a technology enthusiast with a passion for creativity and a natural curiosity. I have developed a range of skills through my journey and am always looking for ways to expand my knowledge and expertise. My determination and perseverance have allowed me to succeed in tackling new challenges and bringing my ideas to life. My innovative approach to problem-solving and willingness to take risks make me a valuable asset in any project or venture. I am confident in my abilities and excited to continue exploring the endless possibilities of technology.
    </p>
    </div>
    </Fade>
    <div className="lineDesc"></div>
    </div>
    </div>
   
  )

}