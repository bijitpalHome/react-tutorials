import React from 'react'
import ReactDom from 'react-dom'

class Formtest extends React.Component{
   constructor(props){
     super(props);
     // this.state = {value: ''}
     //this.state = {value: false}
     this.state = {value: 'alladin'}
   }

   handleSubmit = (e) => {
     console.log(this.state.value);
     e.preventDefault();
   }

   handleChange = (e) =>{
     this.setState({
       //value : e.target.value
       value : !this.state.value
     })
   }

    // <input type='text' value={this.state.value} onChange={this.handleChange} />
    // <textarea value={this.state.value} onChange={this.handleChange}/>
    // <label>Checkbox</label>
    // <input type='checkbox' value={this.state.value} onChange={this.handleChange} />
   render(){
     return(
       <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='pikachu'>Pikachu</option>
            <option value='alladin'>Alladin</option>
          </select>
          <input type="submit" value="Go ahead" />
       </form>
     )
   }
}

ReactDom.render(
  <Formtest />,
  document.getElementById('root')
);
