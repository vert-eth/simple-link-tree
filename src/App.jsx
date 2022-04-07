import React, { useEffect, useState, require, keys, context } from "react";
import './App.css';
import jsonList from './links';
import tw from './img/twitter.png';
import git from './img/github.png';
import logo from './img/vert-logo-new.png';

var images = [tw, git];

function App() {
  
  let linkList = [];
  
  for (var l in jsonList) {
    let link = jsonList[l];
    let newLink = {
      url: link.link,
      type: link.type,
      path: link.icon,
      name: link.name
    };
    linkList.push(newLink);
  }
  
  return (
    <main>
      <div className="dataContainer">
        <div className="innerContainer">
          <div className="contentContainer">
            <img className="bigLogo" src={logo} />
            <h2>vert.eth</h2>
            <p>A paragraph will go here</p>
          </div>
          <div className="linkList">
            {linkList.map((a, i) => {
              return (
                <a className={"majorLink " + a.type} href={a.url} key={i + "_link"}  target="_blank" rel="noopener noreferrer">
                  <div className="linkContainer" key={i + "container"}>
                    <img className="linkIcons" src={images[i]} />
                    {a.name}
                  </div>
                </a>
              )
            })}
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;