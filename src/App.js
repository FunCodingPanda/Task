import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setTasksAction } from './actions';
import TaskForm from './TaskForm';
import Task from './Task';



class App extends Component {
  componentDidMount() {
    axios.get(`https://private-anon-55d0c5b4d1-cycuradevtest.apiary-mock.com/tasks`)
        .then(response => this.props.setTasks(response.data));
  }
  
  render() {
    return (
      <div className="App">
        <h1> My Tasks </h1> 
        <TaskForm />
        {
          this.props.tasks.map((task, idx) =>
            <Task
              description={task.description}
              key={idx}
              tags={task.tags}
              title={task.title} />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  setTasks: (tasks) => dispatch(setTasksAction(tasks))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
