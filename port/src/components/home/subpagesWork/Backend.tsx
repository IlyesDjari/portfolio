import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Fade } from "react-awesome-reveal";


export function Backend() {

  const [loading, setLoading] = useState(true);


  const [backendData,setBackendData]=useState([])
    useEffect(()=>{
      axios.get('https://portfolioilyes.ew.r.appspot.com/api/backends')
        .then(res=>{
          setBackendData(res.data.data) 
          setLoading(false);
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


  if (loading) {
    return <Loading></Loading>
  } else {
  return (
    <>
   <Fade cascade damping={0.1} triggerOnce> 
    <h1 className="backendWorkTitle">Backend</h1>
    <div className="allProjects">
    {backendWorks}
    </div>
    </Fade>
    </>
  );
  }
}