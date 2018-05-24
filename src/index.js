import React from 'react'
import ReactDom from 'react-dom'

function Message(props){
  if(props.value){
  return <h1>This is first message</h1>
 }
 else{
   return <h1>This is 2nd message</h1>
 }
}

class Btn extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:true}
  }

handleClick = () => {
  this.setState({
    value: !this.state.value
  });
}

  render(){
    return(
      <div>
         <button onClick={this.handleClick}>Change Message</button>
         <Message value={this.state.value}/>
      </div>
    )
  }
}

ReactDom.render(
  <Btn/>,
  document.getElementById('root')
);
