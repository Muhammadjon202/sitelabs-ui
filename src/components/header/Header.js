import React from 'react';

import './header.css';

const Header = () => {
    return (
       <header className="header">
           <div className="header_container">
               <div className="con_logo">
                   <img src={"../../img/site.lab.png"} alt="site.lab"/>
               </div>

               <div className="con_nav_bar">
                   <ul className="ul">
                       <li className="list_item"><a href="#">Home</a></li>
                       <li className="list_item"><a href="#">About</a></li>
                       <li className="list_item"><a href="#">Contact</a></li>
                       <li className="bt"><a href="#">Get Started</a></li>
                   </ul>
               </div>
           </div>
       </header>
    )
};

export default Header;