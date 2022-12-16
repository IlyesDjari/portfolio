import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { Loading } from "./Loading";
import { Fade } from "react-awesome-reveal";


export function Ios() {

  const [loading, setLoading] = useState(true);


  const [iosData,setIosData]=useState([])
  useEffect(()=>{
    axios.get('https://portfolioilyes.ew.r.appspot.com/api/ios-devs?populate=*')
      .then(res=>{
        setIosData(res.data.data) 
        setLoading(false);

      })
      .catch(err=>{
        console.log(err);
      })
 },[])
 

 const iosWorks = iosData.map(({data,id, attributes, attributes: {title}})=>{
  return( 
    <Link to={`/work/details`} state={{attributes}}>
    <div className="projectContainer" key={id}>
      <h2 className="projectName"> {title} </h2>
    </div>
    </Link>
  )
})


if (loading) {
  return <Loading></Loading>
} else {
return (
  <>
  <h1 className="myWorkTitle">All cases</h1>
  <div className="whiteLine"></div>
  <Fade cascade damping={0.1} triggerOnce>
  <h1 className="iosWorkTitle">iOS development</h1>
  <div className="allProjects">
  {iosWorks}
  </div>
  </Fade>
  </>
);
}
}