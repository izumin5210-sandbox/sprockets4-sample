import React, { Component, PropTypes }  from "react";
import { dispatcher }                   from "react-dispatcher-decorator";
import values                           from "lodash/values";

import Todo from "./Todo";

@dispatcher
export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.context.dispatch("todos:fetch");
  }

  render() {
    const { todos } = this.props;
    const items = values(todos).map(t => <Todo key={`todo-${t.id}`} todo={t} />);
    return (
      <ul>
        {items}
      </ul>
    );
  }
}
