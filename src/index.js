import { Router } from "preact-router";
import { h, render, Component } from "preact";
import { createHashHistory } from "history";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

import "preact-material-components/Typography/style.css";
import "preact-material-components/Theme/style.css";
import "./style/style.scss";
import "preact/debug";

import Header from "./components/header";
import Hello from "./route/hello";
import Home from "./route/home";
import About from "./route/about";
import CodeRouter from "./route/code/router";

class Index extends Component {
    constructor(props) {
        super(props);
        OfflinePluginRuntime.install({
            onUpdating: () => {
                console.log("SW Event:", "onUpdating");
            },
            onUpdateReady: () => {
                console.log("SW Event:", "onUpdateReady");
                // Tells to new SW to take control immediately
                runtime.applyUpdate();
            },
            onUpdated: () => {
                console.log("SW Event:", "onUpdated");
                // Reload the webpage to load into the new version
                window.location.reload();
            },

            onUpdateFailed: () => {
                console.log("SW Event:", "onUpdateFailed");
            }
        });
    }
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
}

render(<Index />, document.body);
