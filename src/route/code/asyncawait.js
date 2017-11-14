import { h, render, Component } from "preact";
import Card from "preact-material-components/Card";
import HighLightJS from "~/components/highlight";

import "preact-material-components/Card/style.css";

export default class AsyncAwait extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "In progress ..." };
  }

  componentDidMount() {}

  render(props, { text }) {
    const demo = ``;

    //https://babeljs.io/docs/plugins/transform-runtime/
    //https://stackoverflow.com/questions/36313885/babel-6-transform-runtime-export-is-not-a-function
    //https://babeljs.io/docs/usage/polyfill/

    function doubleAfter2Seconds(x) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x * 2);
        }, 2000);
      });
    }

    async function addAsync(x) {
      const a = doubleAfter2Seconds(10);
      const b = doubleAfter2Seconds(20);
      const c = doubleAfter2Seconds(30);
      // Place all awaits on the same line
      // so that they're handled in parallel
      // like promise.all.
      return x + (await a) + (await b) + (await c);
    }

    addAsync(5).then(result => {
      const text =
        "Note that this was calculated in only 2 seconds because calculations above were handed in parallel: " +
        result;

      this.setState({ text: text });
    });

    return (
      <Card>
        <Card.Media>
          <h4>
            Async operation: <span>{text} </span>
          </h4>
          <HighLightJS code={demo} />
        </Card.Media>
      </Card>
    );
  }
}
