import React from 'react';
import {Link} from 'react-router-dom'





export default function Nav() {
    return (
        <>
        <nav className="navContainer">
                <div className="navigation">
                    <div className="ilyesNav">
                        <img className="logoNav" src={'/images/iD.png'} alt="" />
                    </div>
                    <div className="menuNav">
                        <ul>
                            <li className="active"><Link to='/'>Home</Link></li>
                            <li><Link to='/work'>Work</Link></li>
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