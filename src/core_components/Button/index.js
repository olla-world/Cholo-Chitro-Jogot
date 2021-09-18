import React from 'react';

export default function Button(props){
    const {class_name_mod, children, action, data} = props
    const handleClick = () => action(data)
    return(
        <div 
            className={`button button--${class_name_mod}`}
            onClick = {() => handleClick()}
        >{
            <div className="button__body">{children}</div>            
        }</div>
    )
}