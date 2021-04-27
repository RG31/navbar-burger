import React from 'react';
//

function Nav() {
    return (
        <nav className="navbar">
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
        </nav>
    )
}

export default Nav
