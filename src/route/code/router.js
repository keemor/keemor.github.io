import { h, render, Component } from "preact";
import Card from "preact-material-components/Card";

import HighLightJS from "~/components/highlight";

export default class RouterCode extends Component {
  render(props, { text }) {
    const demo = `
import { h, render, Component } from "preact";
import { Router } from "preact-router";
import { createHashHistory } from "history";

import Header from "./components/header";
import Hello from "./route/hello";
import Home from "./route/home";
import About from "./route/about";

class Index extends Component {
  logPageView() {
    
  }

  render() {
    return (
      <div>
        <Header />
        <div class="marginTop">
          <Router history={createHashHistory()} onChange={this.logPageView}>
            <Home default path="/" />
            <Hello path="/hello" />
            <About path="/about" />
          </Router>
        </div>
      </div>
    );
  }
}

render(<Index />, document.body);`;

    return (
      <Card>
        <Card.Primary>
          <Card.Title>
            Example of{" "}
            <a href="https://github.com/developit/preact-router">
              preact router
            </a>{" "}
            with hash{" "}
            <a href="https://github.com/ReactTraining/history">history</a>{" "}
            support
          </Card.Title>
        </Card.Primary>
        <Card.Media>
          <HighLightJS code={demo} />
        </Card.Media>
      </Card>
    );
  }
}
