import { h, render, Component } from "preact";
import { HighLight, THEME } from "preact-highlight";

export default class Router extends Component {
    render(props, { text }) {
        const demo = `class Index extends Component {
    logPageView() {
        window.dataLayer.push({ event: window.location.hash });
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

        return <HighLight language="JavaScript" className="cmp-high-light" code={demo} theme={THEME.monokaiSublime} />;
    }
}
