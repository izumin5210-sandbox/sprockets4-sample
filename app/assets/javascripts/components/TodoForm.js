import React, { Component, PropTypes }  from "react";
import { dispatcher }                   from "react-dispatcher-decorator";

@dispatcher
export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { body: "" }
  }

  onContentChange(e) {
    this.setState({ body: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    this.context.dispatch("todos:create", { body: this.state.body });
  }

  render() {
    return (
      <form onSubmit={e => this.submit(e)}>
        <input
          type="text"
          name="body"
          onChange={e => this.onContentChange(e)}
        />
      </form>
    );
  }
}
