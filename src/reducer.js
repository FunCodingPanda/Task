const defaultState = {
  tasks: []
};

export default (prevState = defaultState, action) => {
  switch(action.type) {
    case 'SET_TASKS':
      return {...prevState, tasks: action.tasks}
    case 'ADD_TASKS':
      return {...prevState, tasks: [...prevState.tasks, action.task]}
    default:
      return prevState;
  }
}
