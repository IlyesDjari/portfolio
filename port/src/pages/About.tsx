import { Fade } from "react-awesome-reveal"
import { BackButton } from "../components/button/BackButton"
import Nav from "../components/home/Nav"


export function About() {

    window.scrollTo(0, 0);

    return (
        <>
            <Nav></Nav>
            <div className="aboutBody">
                <div className="backButtonAbout">
                <BackButton></BackButton>
                </div>
                <div className="aboutContainer">
                    <h1 className="aboutTitle">Coding lit a new spark in my eyes!</h1>
                    <Fade cascade damping={0.3} triggerOnce> 
                    <p className="aboutDescription">
                        I thought for a long time that I was destined to become a sound engineer. Since I was little I had my nose in my parents' vinyl. Music was an entire part of my life at all times. And what better than reading a good book with a smooth sound of Jazz in the background? Music has always been an essential factor in allowing me to study with a big smile. So in 2020, I obtained my ASO diploma at Atheneum Brussel in modern languages, mathematics, and science. Very quickly I also became interested in beat making & mixing. I spent night and day learning these arts. I then quickly established contacts with several pillars of the hip-hop scene in Brussels. Until this day I mix for others and I create new beats. Besides that, I’m a fully independent artist too.
                    </p>
                    <p className="aboutDescription">
                    Just before the end of my studies, there was a big turning point in my professional choice. I had echoes of a new art form, coding! I got interested in it and it gave birth to a second flame in my eyes. In 2020 I, therefore, started at Erasmus hogeschool Brussel in the multimedia & creative technologies branch. I am currently learning all the inner workings of coding. I am already fluent in HTML, CSS, JavaScript, Typescript, React, Angular, PhP, Laravel, Node.JS, Kotlin, MySQL, and NoSQL, Swift storyboard & Swift UI. I am currently learning ObjectiveC and different JS frameworks to learn even more. I am not only learning code but also design in general but especially UI / UX design for websites & applications. It made me master: Photoshop, Illustrator, Xd & InDesign. Besides that, I also learned the basics of 3D on Maya software & video editing on Adobe Première & After Effects. But I mainly want to continue my journey in coding & the music industry. I hope to make this passion my livelihood!
                    </p>
                    <p className="aboutDescription">
                    I think you understood that I am very passionate & creative. I am constantly thirsty for knowledge and when I like something I give myself the means to achieve it. I am addicted to the feeling of satisfaction after the end of every project I undertake. And I wish to continue on this road and I hope to accomplish great things. Every day I learn and I want to get far.
                    </p>
                    <p className="aboutDescription">
                    Besides my studies, I have been working  for more than 4 years at IKEA Zaventem. I am a salesperson there in the plants & decoration section. This allowed me to build a professional experience and to immerse myself in the world of work.
                    </p>
                    </Fade>
                </div>
            </div>
        </>
    )
}