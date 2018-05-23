import React from 'react'
import ReactDom from 'react-dom'

class Inc extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter : 0}
    //this.increment = this.increment.bind(this);//this is not a good solution, since,
    //we can have many functions like increment, and we would need to add this kind of statement to bind the class instance
    //this to bind to the function insatance-this
    //that way, when we say, this.setState({}), within a function, this referes to the this of the class instance, and not the
    //function instance.
  }

increment(e){
  e.preventDefault();
  this.setState({
    counter: this.state.counter + 1
  })
}

  render(){
     //return <a href='http://google.com' onClick={this.increment}>Value is {this.state.counter}</a>
     //to solve the problem, said, above,
     return <a href='http://google.com' onClick={(e) => this.increment(e)}>Value is {this.state.counter}</a>
  }


  //other way U can do it:. This is the preferred way
  // increment = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     counter: this.state.counter + 1
  //   })
  // }
  //   render(){
  //      return <a href='http://google.com' onClick={this.increment}>Value is {this.state.counter}</a>
  //   }

}

ReactDom.render(
  <Inc/>,
  document.getElementById('root')
)
