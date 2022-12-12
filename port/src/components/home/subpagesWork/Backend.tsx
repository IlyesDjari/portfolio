import axios from "axios";
import { useEffect, useState } from "react";

export function Backend() {

  const [backendData,setBackendData]=useState([])
    useEffect(()=>{
      axios.get('https://portfolioilyes.ew.r.appspot.com/api/backends')
        .then(res=>{
          setBackendData(res.data.data) 
        })
        .catch(err=>{
          console.log(err);
        })
   },[])
   

   const backendWorks = backendData.map(({data,id, attributes, attributes: {title}})=>{
    return( 
    <div className="projectContainer" key={id}>
      <h2 className="projectName"> {title} </h2>
    </div>
    )
  })
  return (
    <>

    <h1 className="backendWorkTitle">Backend</h1>
    <div className="allProjects">
    {backendWorks}
    </div>
    </>
  );
}