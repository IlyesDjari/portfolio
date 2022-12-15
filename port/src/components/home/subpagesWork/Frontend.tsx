import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

export function Frontend() {

  const [loading, setLoading] = useState(true);


  const [frontendData,setFrontendData]=useState([])
    useEffect(()=>{
      axios.get('https://portfolioilyes.ew.r.appspot.com/api/frontends?populate=*')
        .then(res=>{
          setFrontendData(res.data.data) 
          setLoading(false);

        })
        .catch(err=>{
          console.log(err);
        })
   },[])
   

   const frontendWorks = frontendData.map(({data,id, attributes: {title}, attributes})=>{
    return( 
      <Link to={`/work/details`} state={{attributes}}>
    <div className="projectContainer" key={id}>
      <h2 className="projectName"> {title} </h2>
    </div>
    </Link>
    )
  })


  if (loading) {
    return (<Loading></Loading>)
  } else {
  return (
    <>
    <h1 className="frontendWorkTitle">Frontend</h1>
    <div className="allProjects">
    {frontendWorks}
    </div>
    </>
  );
  }
}