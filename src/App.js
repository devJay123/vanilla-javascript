// export default class App {
//   constructor() {
//     this.el = document.createElement("div");
//     this.el.textContent = "hello world";
//   }
// }

import { Component } from "./core/core";

export default class App extends Component {
  render() {
    this.el.textContent = "hello";
  }
}
