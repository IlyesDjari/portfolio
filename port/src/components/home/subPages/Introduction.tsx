import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Introduction() {
    return (
        <>
            <div className="homeBG">
                <div className="introductionContainer">
                    <h1 className="introductionTitle">ILYES DJARI</h1>
                    <Fade delay={3} triggerOnce>
                    <h2 className="introductionSubTitle">Designer & developer</h2>
                    </Fade>
                </div>

                    <ul className="introductionFooter">
                        <li><a href="https://www.linkedin.com/in/ilyes-djari/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                        <li><a href="mailto:djari.ilyes@gmail.com">EMAIL</a></li>
                        <li><a href="https://github.com/IlyesDjari" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                    </ul>
            </div>
        </>
    )
}