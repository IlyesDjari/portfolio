import axios from "axios";
import { useEffect, useState } from "react";

export function Ios() {

  const [iosData,setIosData]=useState([])
  useEffect(()=>{
    axios.get('https://portfolioilyes.ew.r.appspot.com/api/ios-devs')
      .then(res=>{
        setIosData(res.data.data) 
      })
      .catch(err=>{
        console.log(err);
      })
 },[])
 

 const iosWorks = iosData.map(({data,id, attributes: {title}})=>{
  return( 
  <div className="projectContainer" key={id}>
    <h2 className="projectName"> {title} </h2>
  </div>
  )
})
return (
  <>
  <h1 className="myWorkTitle">All cases</h1>
  <div className="whiteLine"></div>
  <h1 className="iosWorkTitle">iOS development</h1>
  <div className="allProjects">
  {iosWorks}
  </div>
  </>
);
  
}