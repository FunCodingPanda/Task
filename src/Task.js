import React, { Component } from 'react';

class Task extends Component {
  render () {
    return (
      <div> 
        <h1> Title: {this.props.title} </h1>
        <div>
          <h2> Description </h2>
            <p> {this.props.description} </p>
         </div>
         <div>
          <h2> Tags </h2> 
          <ul> {this.props.tags.map((tag, idx) => <li key={idx}>{ tag }</li>)} </ul>
        </div>
      </div>
    )
  }
}

export default Task;