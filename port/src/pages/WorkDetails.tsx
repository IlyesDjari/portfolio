import Nav from "../components/home/Nav";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GitButton } from "../components/button/GitButton";
import React from "react";
import { BackButton } from "../components/button/BackButton";


export default function WorkDetails(props: { location: { state: { data: any; }; }; }) {
  const { data } = props.location.state;  
  const img = data.attributes.images.data
  const images = img.map(({id,attributes: {url}}: {id: any, attributes : any , url: string})=>{    
    return(
      <img key={id} src={url} alt="Logo" className="imagesWork" />
    )   
  }) 
  
  

  return (
      <>
      <div className="workDetailsPageContainer">
      <Nav></Nav>
      {data.attributes.type === "mobile" ? (
      <div className="detailsContent">
      <div className="workTxt">
      <div className="backButtonDetails">
        <BackButton></BackButton>
        </div>
        <div className="headerWorks">
      <h1 className="detailsTitle">{data.attributes.title}</h1>  
      {data.attributes.git === null ? null :  <GitButton src={data.attributes.git}></GitButton> }
      </div>
      <p className="descriptionWork">{data.attributes.description}</p>
      </div>
      <div className="imagesWorkDetails">
      <Carousel className="carouselView">
      {images}
      </Carousel>
      </div>

      </div>) : (
       <div className="detailsContentWeb">
       <div className="workTxtWeb">
       <div className="backButtonDetails">
        <BackButton></BackButton>
        </div>
       <div className="headerDetails">
     <h1 className="detailsTitle">{data.attributes.title}</h1>
     {data.attributes.git === null ? null :  <GitButton src={data.attributes.git}></GitButton> }
     </div>
     <p className="descriptionWork">{data.attributes.description}</p>
     </div>
     <div className="imagesWorkDetails">
     <Carousel className="carouselWeb">
     {images}
     </Carousel>
     </div>
     </div>
      )}
      </div>
      </>
  )
}