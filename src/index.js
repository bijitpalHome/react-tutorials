import React from 'react'
import ReactDom from 'react-dom'

//let clock = function(){
  //return <h2>{new Date().toLocaleTimeString()}</h2>
//}

//one way of writing component
// function Cartoon(props){
//  return <h1>Hello, {props.name}</h1>
// }

//one way of writing component
// class Cartoon extends React.Component{
//   render(){
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

//can use component inside another component
function Cartoon(props){
 return <h1>Hello, {props.name} on {props.show}</h1>
}

function Show(){
  return <div>
           <Cartoon name='Pikachoo' show='Pokemon' />
           <Cartoon name='Jasmine' show='Alladin' />
        </div>
}

ReactDom.render(
 //<h2>Time Now: {new Date().toLocaleTimeString()}</h2>,
 //<Cartoon name='Bijit'/>,
 <Show />,
  document.getElementById('root')
);

//Always a component return single html element.That means, a single <div> can
//contain multiple elements inside it. But, on parent level, it has to be
//a single element, such as the <div>
