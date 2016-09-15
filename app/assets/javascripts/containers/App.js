import React, { Component }           from "react";
import { subscriber }                 from "react-dispatcher-decorator";

import {
  TodoList,
  TodoForm,
} from "../components";

import reducer, { initialState } from "../reducers";

@subscriber(reducer)
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);
  }

  render() {
    return (
      <div>
        <TodoForm />
        <TodoList todos={this.state.entities.todos} />
      </div>
    );
  }
}
