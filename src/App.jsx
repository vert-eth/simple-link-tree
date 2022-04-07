import React, { useEffect, useState } from "react";
import './App.css';
import jsonList from './links';

function App() {

  // const linkList = useState([]);

  let linkList = [];
  
  for (var l in jsonList) {
    let link = jsonList[l];
    console.log("LINK ELEMENT: " + link.link);
    console.log(link.icon + "   " + link.type)
    let newLink = {
      url: link.link,
      type: link.type,
      icon: link.icon
    };
    console.log(newLink);
    linkList.push(newLink);
  }

  console.log(linkList[0].link);
  
  return (
    <main>
      <div className="dataContainer">
        <div className="innerContainer">
          <div>
            <h2>vert.eth</h2>
            <p></p>
          </div>
          <div className="linkList">
            {linkList.map((a, i) => {
              return (
                <div className="linkContainer" key={i + "container"}>
                  <img className="linkIcons" src={a.icon} />
                  <a className={"majorLink " + a.type} href={a.url} key={i + "_link"}  target="_blank" rel="noopener noreferrer">{a.url}</a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;