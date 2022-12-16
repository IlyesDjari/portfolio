import React from "react";
import { Fade } from "react-awesome-reveal";
import {Link} from 'react-router-dom'

export default function Introduction() {
    return (
        <>
        <div className="containerIntro">
            <div className="homeBG">
                <div className="introductionContainer">
                    <div className="textIntro">
                    <Fade cascade damping={0.3} triggerOnce>
                    <h1 className="introductionTitle">ILYES DJARI</h1>
                    <h2 className="introductionSubTitle">Designer & developer</h2>
                    </Fade>
                    </div>
                </div>
                    <ul className="introductionFooter">
                        <Fade cascade damping={0.3} triggerOnce >
                        <li><a href="https://www.linkedin.com/in/ilyes-djari/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                        <li><a href="mailto:djari.ilyes@gmail.com">EMAIL</a></li>
                        <li><a href="https://github.com/IlyesDjari" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                        </Fade>
                    </ul>
            </div>
            
            <div className="imageEffect">
            <Link to="/about">
                <Fade cascade damping={0.3} triggerOnce>
            <img className="ilyesPicture" src="/images/ilyesMono.png" alt="ilyes" />
            <img className="ilyesPicture" src="/images/ilyesMono.png" alt="ilyes" />
            <img className="ilyesPicture" src="/images/ilyesMono.png" alt="ilyes" />
            <img className="ilyesPicture" src="/images/ilyesMono.png" alt="ilyes" />
            </Fade>
            </Link>
            </div>
           
            </div>
        </>
    )
}