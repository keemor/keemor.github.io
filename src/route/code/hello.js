import { h, render, Component } from "preact";
import Card from "preact-material-components/Card";
import HighLightJS from "~/components/highlight";

import "preact-material-components/Card/style.css";

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.onInput = this.onInput.bind(this);
  }

  componentDidMount() {
    this.element.focus();
  }

  onInput(e) {
    this.setState({ text: e.target.value });
  }

  render(props, { text = "" }) {
    const demo = `
import { h, render, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.onInput = this.onInput.bind(this);
  }

  componentDidMount() {
    this.element.focus();
  }

  onInput(e) {
    this.setState({ text: e.target.value });
  }

  render(props, { text = "" }) {
    return (
      <Card>
        <Card.Media>
          <h4>
            <label for="hello">Your name</label>:{" "}
            <input
              ref={ref => {
                this.element = ref;
              }}
              id="hello"
              value={text}
              onInput={this.onInput}
            />
          </h4>
          <h4>
            Hello: <span>{text} </span>
          </h4>
          
        </Card.Media>
      </Card>
    );
  }
}`;

    return (
      <Card>
        <Card.Media>
          <h4>
            <label for="hello">Your name</label>:{" "}
            <input
              ref={ref => {
                this.element = ref;
              }}
              id="hello"
              value={text}
              onInput={this.onInput}
            />
          </h4>
          <h4>
            Hello: <span>{text} </span>
          </h4>
          <HighLightJS code={demo} />
        </Card.Media>
      </Card>
    );
  }
}
