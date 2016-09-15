import "babel-polyfill";

import { createElement }  from "react";
import ReactDOM           from "react-dom";

import { App } from "./containers";

ReactDOM.render(
  createElement(App),
  document.getElementById("container")
);
