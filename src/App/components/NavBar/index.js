import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ href, text, type, imgSrc }) => (
  <div className="nav-menu">
    <Link className="link" to={href}>{
        type==='brand'?
        <div className="logo logo--text">
            {text}
        </div>
        :<div className="nav-menu__item"> 
            {text}
        </div>      
    }</Link>
  </div>
);

export default function NavBar({ links }){
    return (
        <div className="navbar">{
            links.map(({ href, text, type, imgSrc }, i) => (
                <NavLink 
                    key={i} 
                    href={href} 
                    text={text} 
                    type={type}
                    imgSrc={imgSrc}/>
                )
            )
        }
        </div>
    )
};
