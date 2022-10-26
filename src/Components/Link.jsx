import React from "react";

export default function(props) {
  const ind = props.index;
  return (
    <a 
      className={"majorLink " + props.type} 
      href={props.url} key={props.ind + "_link"}  
      target="_blank" 
      rel="noopener noreferrer"
      key={"link_" + ind}
    >
      <div 
        className="linkContainer" 
        key={props.index + "container"} 
        id={"linkContainer_" + ind}
      >
        <img 
          className="linkIcons" 
          src={props.image} 
          id={props.name + ind} 
          key={props.name + ind} 
        />
          {props.name}
      </div>
    </a>
  )
}