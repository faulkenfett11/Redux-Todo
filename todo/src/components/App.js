import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, completed } from '../actions/actions';
import './App.css';
import TodoList from './TodoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
    };
  }
  
  handleAddTodo = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmitTodo = (value) => {
    this.setState({newTodo: ""});
    this.props.add(value)
  }

  handleComplete = (value) => {
    this.setState({newTodo: ""});
    this.props.completed(value)
  }

  render() {
    return (
      <div className="container">
      <h1 className="header">Justin's Redux To-do List</h1>
        
          <input type="text" 
                 placeholder="Add todo"
                 name="newTodo"
                 value={this.state.newTodo}
                 onChange={this.handleAddTodo}
                 className="input"
          />
          <button className="button" onClick={() => this.handleSubmitTodo(this.state.newTodo)}>Add Todo</button>
          
        <TodoList todo={this.props.todo} handleComplete={this.handleComplete} />
      </div>
    )
  }
};

const mapStateToProps = (value) => {
  return {
    todo: value
  };
}

export default connect( mapStateToProps, { add, completed })(App);
