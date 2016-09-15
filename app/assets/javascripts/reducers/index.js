import PromisedReducer                from "promised-reducer";
import { normalize, Schema, arrayOf } from "normalizr";

import axios    from "axios";
import merge    from "lodash/merge";
import union    from "lodash/union";
import flatten  from "lodash/flatten";

import { TodosSchema }  from "../schemata";

export const initialState = {
  result: {
    todos: [],
  },
  entities: {
    todos: {},
  }
};

export default function(self, subscribe) {
  const reducer = new PromisedReducer(initialState);

  reducer.on(":update", state => self.setState(state));

  const mergeState = (key, {entities, result}) => {
    reducer.update(state => merge({}, state, {
      result: {
        [key]: union(state.result[key], flatten([result])),
      },
      entities: entities,
    }));
  };

  subscribe("todos:fetch", () => {
    axios.get("/api/todos")
      .then(res => {
        // TODO: Support pagination
        mergeState("todos", normalize(res.data, arrayOf(TodosSchema)));
      })
      .catch(err => {
        // TODO: Error handling
        console.log(err);
      });
  });

  subscribe("todos:create", prop => {
    axios.post("/api/todos", prop)
      .then(res => {
        mergeState("todos", normalize(res.data, TodosSchema));
      })
      .catch(err => {
        // TODO: Error handling
        console.log(err);
      });
  });

  subscribe("todos:complete", props => {
    axios.put(`/api/todos/${props.id}/complete`)
      .then(res => {
        mergeState("todos", normalize(res.data, TodosSchema));
      })
      .catch(err => {
        // TODO: Error handling
        console.log(err);
      });
  });

  subscribe("todos:incomplete", props => {
    axios.delete(`/api/todos/${props.id}/complete`)
      .then(res => {
        mergeState("todos", normalize(res.data, TodosSchema));
      })
      .catch(err => {
        // TODO: Error handling
        console.log(err);
      });
  });
}
