import React from 'react';
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";






export default function Nav() {
    
const location = useLocation();
const value = String(location.pathname)    

  let navigation;
  switch (value) {
    case '/':
        navigation = <>
      <li className="active">
        <Link to='/'>Home</Link>
        </li>
        <li><Link to='/work'>Work</Link>
        </li>
        <li><Link to='/about'>About</Link>
        </li>
        </>
      break;
    case '/work':
        navigation = <>
      <li >
        <Link to='/'>Home</Link>
        </li>
        <li className="active"><Link to='/work'>Work</Link>
        </li>
        <li><Link to='/about'>About</Link>
        </li>
        </>
      break;
    case '/about':
        navigation = <>
      <li >
        <Link to='/'>Home</Link>
        </li>
        <li ><Link to='/work'>Work</Link>
        </li>
        <li className="active"><Link to='/about'>About</Link>
        </li>
        </>
      break;
    default:
      navigation = <div>Invalid option</div>;
  }

    return (
        <>
        <nav className="navContainer">
                <div className="navigation">
                    <div className="ilyesNav">
                        <img className="logoNav" src={'/images/iD.png'} alt="" />
                    </div>
                    <div className="menuNav">
                        <ul>
                        {navigation}
                        
                        </ul>
                    </div>
                    <div className="contactNav">
                        <a href="mailto:contact@ilyesdjari.com" className="contactButton">
                            <h2>
                            Contact me
                            </h2>
                        </a>
                    </div>
                </div>
            </nav> 
       
        </>
    )
}