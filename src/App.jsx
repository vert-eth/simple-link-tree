import React, { useEffect, useState, require, keys, context, process } from "react";

import './App.css';
import imgList from './images';
import jsonList from './links';
import Link from './Components/Link';
import logo from '../img/vert-logo-new.png';

function App() {
  let linkList = [];
  
  var imageList = [];
  for (var l in jsonList) {
    let link = jsonList[l];

    let newLink = {
      url: link.link,
      type: link.type,
      path: link.path,
      name: link.text,
      image: imgList[link.id],
      show: link.show
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
            <p>I'm a passionate artist and developer building in the crypto and web3 space. Get connected below!</p>
          </div>
          <div className="linkList">
            {linkList.map((a, i) => {
              if (a.show) {
                return (
                  <Link 
                    type={a.type}
                    url={a.url}
                    index={i}
                    image={a.image}
                    name={a.name}
                    key={"linkComponent_" + i}
                  />
                );
              }
            })}
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
