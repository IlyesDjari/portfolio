import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Design() {



  const [designData,setDesignData]=useState([])
    useEffect(()=>{
      axios.get('https://portfolioilyes.ew.r.appspot.com/api/designs?populate=*')
        .then(res=>{
          setDesignData(res.data.data)           
        })
        .catch(err=>{
          console.log(err);
        })
   },[])


     const designWorks = designData.map(({data,id, attributes: {title}, attributes})=>{      
      return( 
        <Link to={`/work/details`} state={{attributes}}>
          <div className="projectContainer" key={id}>
            <h2 className="projectName"> {title} </h2>
          </div>
        </Link>
      )
    }) 
  return (
    <>

    <h1 className="designUIUXTitle">UI/UX Design</h1>
    <div className="allProjects">
    {designWorks}
    </div>
    </>
  );
}