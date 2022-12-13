import React from 'react';
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";






export default function Nav() {
    
    const location = useLocation();
    console.log(location.pathname);

    return (
        <>
        <nav className="navContainer">
                <div className="navigation">
                    <div className="ilyesNav">
                        <img className="logoNav" src={'/images/iD.png'} alt="" />
                    </div>
                    <div className="menuNav">
                        <ul>
                        {location.pathname === "/" ? (
                            <><li className="active"><Link to='/'>Home</Link></li><li><Link to='/work'>Work</Link></li></>) : (
                                <><li><Link to='/'>Home</Link></li><li className="active"><Link to='/work'>Work</Link></li></>
                            )}
                        </ul>
                    </div>
                    <div className="contactNav">
                        <button className="contactButton">
                            Contact me
                        </button>
                    </div>
                </div>
            </nav> 
       
        </>
    )
}