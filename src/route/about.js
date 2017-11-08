import { h, render, Component } from "preact";

export default class About extends Component {
  render(props, { text }) {
    return (
      <div>
        <h2>Source code</h2>
        <a href="https://github.com/keemor/keemor.github.io">
          https://github.com/keemor/keemor.github.io
        </a>
      </div>
    );
  }
}
