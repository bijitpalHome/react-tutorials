import React from 'react'
import ReactDom from 'react-dom'

//let clock = function(){
  //return <h2>{new Date().toLocaleTimeString()}</h2>
//}

setInterval(function(){
ReactDom.render(
 <h2>Time Now: {new Date().toLocaleTimeString()}</h2>,
  document.getElementById('root')
);
},1000);
