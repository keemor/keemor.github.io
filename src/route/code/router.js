import { h, render, Component } from "preact";
import Card from "preact-material-components/Card";

import HighLightJS from "~/components/highlight";

export default class Router extends Component {
    render(props, { text }) {
        const demo = `
import { Router } from "preact-router";
import { h, render, Component } from "preact";
import { createHashHistory } from "history";

class Index extends Component {
    logPageView() {
        console.info(window.location.hash);
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
                        <CodeRouter path="/router" />
                    </Router>
                </div>
            </div>
        );
    }
}`;

        return (
            <Card>
                <Card.Primary>
                    <Card.Title>
                        Example of <a href="https://github.com/developit/preact-router">preact router</a> with hash{" "}
                        <a href="https://github.com/ReactTraining/history">history</a> support
                    </Card.Title>
                </Card.Primary>
                <Card.Media>
                    <HighLightJS code={demo} />
                </Card.Media>
            </Card>
        );
    }
}
