import React from "react";
import "./Nav.css";
import { useState } from "react" ; 
    
   

function Nav() {
    const  [showLinks, setShowLinks] = useState(false);
    /* button navbar-burger => onClick () */
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
        /* on edite la valeur (affiche les links) 
           que si showlinks est différent de (false) et à true on l'active */
    }
    /* console.log(showLinks);*/

    return (
        /* si classe chow-nav activée => on affiche 
        <nav className="navbar show-nav"> 
        on passe en jajascript pour effectuer la condition
        */    
        <nav className={`navbar ${ showLinks ? "show-nav" : "hide-nav"} `}>
            <div className="navbar__logo">Logo</div> 
            <ul className="navbar__links">
               <li className="navbar__item slideInDown-1">
                   <a href="/" className="navbar__link"> 
                   Accueil
                   </a>
               </li>
               <li className="navbar__item slideInDown-2">
                   <a href="/" className="navbar__link"> 
                   Portofolio
                   </a>
               </li>
               <li className="navbar__item slideInDown-3">
                   <a href="/" className="navbar__link">
                    Services
                    </a>
               </li>
               <li className="navbar__item slideInDown-4">
                   <a href="/" className="navbar__link">
                    A propos
                    </a>
               </li>
               <li className="navbar__item slideInDown-5">
                   <a href="/" className="navbar__link">
                    Contact
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
