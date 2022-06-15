import React from "react";
import "./Nav.css";
import { useState } from "react" ; 
    //
function Nav() {
    const  [showLinks, setShowLinks] = useState(false);
    /* button navbar-burger => onClick () */
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
        /* on edite la valeur (affiche les links) 
           que si showlinks est différent de (false) et à true on l'active */
    }
    /*console.log(showLinks);*/

    return (
        /* si classe chow-nav activée => on affiche 
        <nav className="navbar show-nav"> 
        on passe en jajascript pour effectuer la condition
        */    
        <nav className={`navbar ${ showLinks ? "show-nav" : "hide-nav"} `}>
            <div className="navbar__logo">
                <a href="/" className="navbar__link"> 
                logo
                </a>
            </div> 
            <ul className="navbar__links">
               <li className="" nav={showLinks} onClick={() => setShowLinks(!showLinks)}>
                   <a href="#Accueil" className="navbar__link"> 
                   Accueil
                   </a>
               </li>
               <li className="" nav={showLinks} onClick={() => setShowLinks(!showLinks)}>
                   <a href="#Portfolio" className="navbar__link"> 
                   Portofolio
                   </a>
               </li>
               <li className="" nav={showLinks} onClick={() => setShowLinks(!showLinks)}>
                   <a href="#Services" className="navbar__link">
                    Services
                    </a>
               </li>
           </ul>
           <button className="navbar__burger" onClick= {handleShowLinks} >
            <span className="burger-bar">
                </span>         
           </button>
        </nav>
    )
}

export default Nav
