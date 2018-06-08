import { h, render, Component } from 'preact';
import Card from 'preact-material-components/Card';

import HighLightJS from '~/components/highlight';

export default class RouterCode extends Component {
    render(props, { text }) {
        const demo = `
import { h, render, Component } from "preact";
import Router from "preact-router";
import AsyncRoute from 'preact-async-route';
import { createHashHistory } from "history";

import Header from "./components/header";
import Home from "./route/home";

class Index extends Component {
  logPageView() {
    
  }

  getComponent(url, cb, props) {
    return System.import('./route' + url).then(module => module.default);
  }
  
  render() {
    return (
      <div>
        <Header />
        <div class="marginTop">
          <Router history={createHashHistory()} onChange={this.logPageView}>
            <Home default path="/" />
            <AsyncRoute path="/hello" getComponent={this.getComponent} />
            <AsyncRoute path="/about" getComponent={this.getComponent} />
          </Router>
        </div>
      </div>
    );
  }
}

render(<Index />, document.body);`;

        return (
            <Card>
                <div>
                    <h3>
                        Example of <a href="https://github.com/developit/preact-router">preact router</a> and{' '}
                        <a href="https://github.com/prateekbh/preact-async-route">preact-async-route</a> with hash{' '}
                        <a href="https://github.com/ReactTraining/history">history</a> support
                    </h3>
                    <p>
                        Based on{' '}
                        <a href="https://medium.com/@prateekbh/code-splitting-and-server-side-rendering-for-preact-async-routes-e8052e08ba22">
                            Code splitting and Server side rendering for preact async routes.
                        </a>
                    </p>
                </div>
                <Card.Media>
                    <HighLightJS code={demo} />
                </Card.Media>
            </Card>
        );
    }
}
