import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ href, text, type, imgSrc }) => (
  <div>
    <Link className="link" to={href}>{
        type==='brand' && imgSrc?
        <img 
            className="logo"
            src={imgSrc} 
            alt="brand logo"
        /> 
        :<div className="logo logo--text"> 
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
