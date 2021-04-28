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
    return (
        /* si classe chow-nav activée => on affiche */
        <nav className="navbar show-nav">
           <div className="navbar__logo">Logo</div> 
           <ul className="navbar__links">
               <li className="navbar__item">
                   <a href="/" className="navbar__link"> 
                   Accueil
                   </a>
               </li>
               <li className="navbar__item">
                   <a href="/" className="navbar__link"> 
                   Portofolio
                   </a>
               </li>
               <li className="navbar__item">
                   <a href="/" className="navbar__link">
                    Services
                    </a>
               </li>
               <li className="navbar__item">
                   <a href="/" className="navbar__link">
                    A propos
                    </a>
               </li>
               <li className="navbar__item">
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
