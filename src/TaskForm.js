import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addTaskAction } from './actions'

class TaskForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      title: '',
      description: '',
      tags: []
    }
    this.submitForm = this.submitForm.bind(this)
    this.titleChanged = this.titleChanged.bind(this)
    this.descriptionChanged = this.descriptionChanged.bind(this)
    this.tagsChanged = this.tagsChanged.bind(this)
  }
  submitForm(e) {
    e.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      tags: this.state.tags
    };
    axios.post('https://private-anon-cb54563fdc-cycuradevtest.apiary-mock.com/tasks', newTask)
      .then(response => this.props.addTask(response.data.feed))
  }
  titleChanged(e){
    const title = e.target.value;
    this.setState(state => ({...state, title}))
  }
  descriptionChanged(e){
    const description = e.target.value;
    this.setState(state => ({...state, description}))
  }
  tagsChanged(e){
    const tags = e.target.value.split(",");
    this.setState(state => ({...state, tags}))
  }

  render() {
      return (
        <div>
          <h1>Create a Task</h1>
          Title: 
           <input
            type='text'
            onChange={this.titleChanged}
            value= {this.state.title} /><br />
          Description: 
            <textarea
            onChange= {this.descriptionChanged}
            value= {this.state.description} /><br />
          Tags: 
            <input 
            type='text'
            onChange={this.tagsChanged}
            value= {this.state.tags.join(",")} /> <br />
            <button onClick={this.submitForm}> Create Task </button>
        </div>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTaskAction(task))
})

export default connect (undefined, mapDispatchToProps)(TaskForm)