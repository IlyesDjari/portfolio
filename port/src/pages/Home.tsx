import { BackEnd } from "../components/home/subPages/BackEnd"
import { Describtion } from "../components/home/subPages/Describtion"
import { Designer } from "../components/home/subPages/Designer"
import FrontEnd from "../components/home/subPages/FrontEnd"
import Introduction from "../components/home/subPages/Introduction"
import { IOSDeveloper } from "../components/home/subPages/IOSDeveloper"
import Nav from "../components/home/Nav"
import React from "react"

export default function Home() {

    window.scrollTo(0, 0);

    return (
        <>
        <Nav></Nav>
        <Introduction></Introduction>
        <Describtion></Describtion>
        <IOSDeveloper></IOSDeveloper>
        <FrontEnd></FrontEnd>
        <BackEnd></BackEnd>
        <Designer></Designer>
        </>

    )
}
