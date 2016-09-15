import React, { Component, PropTypes }  from "react";
import { dispatcher }                   from "react-dispatcher-decorator";

@dispatcher
export default class Todo extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
  };

  toggleState(e) {
    const eventName = e.target.checked ? "todos:complete" : "todos:incomplete";
    this.context.dispatch(eventName, { id: this.props.todo.id });
    return true
  }

  render() {
    const { body, completed } = this.props.todo;
    return (
      <li>
        <label>
          <input type="checkbox" checked={completed} onChange={(e) => this.toggleState(e)} />
          &nbsp;
          {body}
        </label>
      </li>
    );
  }
}
