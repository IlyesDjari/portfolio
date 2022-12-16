import React from "react";
import { BackButton } from "../components/button/BackButton";
import Nav from "../components/home/Nav";
import { Backend } from "../components/home/subpagesWork/Backend";
import { Design } from "../components/home/subpagesWork/Design";
import { Frontend } from "../components/home/subpagesWork/Frontend";
import { Ios } from "../components/home/subpagesWork/Ios";

export default function Work() {

  window.scrollTo(0, 0);
  
  
  return (
      <>
      <div className="workPageContainer">
      <Nav></Nav>
      <div className="backButton">
      <BackButton></BackButton>
      </div>
      <Ios></Ios>
      <Frontend></Frontend>
      <Backend></Backend>
      <Design></Design>
      </div>
      </>
  )
}