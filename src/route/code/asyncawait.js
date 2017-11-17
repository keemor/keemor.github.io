import { h, render, Component } from "preact";
import Card from "preact-material-components/Card";
import HighLightJS from "~/components/highlight";

import "preact-material-components/Card/style.css";

export default class AsyncAwait extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "In progress ..." };
  }

  render(props, { text }) {
    const demo1 = `
import { h, render, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";

export default class AsyncAwait extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "In progress ..." };
  }

  render(props, { text }) {
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
        </Card.Media>
      </Card>
    );
  }
}`;

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
        "Note that this was calculated in only 2 seconds because calculations were handed in parallel: " +
        result;

      this.setState({ text: text });
    });

    return (
      <Card>
        <Card.Media>
          <h4>
            Async operation: <span>{text} </span>
          </h4>
          <h5>
            Example by{" "}
            <a href="https://twitter.com/housecor/status/930108010558640128">
              @housecor
            </a>
          </h5>
          <HighLightJS code={demo1} />
          <h4>To support browsers without async/await</h4>
          Install babel-runtime as dependencies:
          <HighLightJS
            code={"npm install babel-plugin-transform-runtime --save"}
          />
          Install babel-plugin-transform-runtime as devDependencies:
          <HighLightJS
            code={"npm install babel-plugin-transform-runtime --save-dev"}
          />
          Add transform-runtime config to .babelrc
          <HighLightJS
            code={`
["transform-runtime",
{
  "helpers": false,
  "polyfill": false,
  "regenerator": true
}]
              `}
          />
          <h4>To support IE11 add Promise support with babel-polyfill</h4>
          Install babel-runtime as dependencies:
          <HighLightJS code={"npm install babel-polyfill --save"} />
          In webpack.config.babel.js add entry point:
          <HighLightJS
            code={`
import "babel-polyfill";
...
export default env => {
  const { ifProd, ifNotProd, ifTest } = getIfUtils(env);

  return {
    entry: ["babel-polyfill", "./src/index.js"],
    ...
  }
`}
          />
        </Card.Media>
      </Card>
    );
  }
}

//https://babeljs.io/docs/plugins/transform-runtime/
//https://stackoverflow.com/questions/36313885/babel-6-transform-runtime-export-is-not-a-function
//https://babeljs.io/docs/usage/polyfill/
