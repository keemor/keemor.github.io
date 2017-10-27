import { Router } from "preact-router";
import { h, render, Component } from "preact";
import { createHashHistory } from "history";

import "preact-material-components/Typography/style.css";
import "preact-material-components/Theme/style.css";
import "./style/style.scss";

import "preact/debug";

import Header from "./header";
import Hello from "./route/hello";
import Home from "./route/home";
import About from "./route/about";

class Index extends Component {
    logPageView() {
        window.dataLayer.push({ page: window.location.pathname + window.location.search });
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

render(<Index />, document.body);
