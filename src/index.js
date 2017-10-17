import { Router } from "preact-router";
import { h, render, Component } from "preact";
import { createHashHistory } from "history";

import "preact-material-components/Typography/style.css";
import "preact-material-components/Theme/style.css";

//import 'preact/debug';
//import 'preact/devtools';

import Header from "./header";
import Hello from "./hello";
import Home from "./home";
import About from "./about";

class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router history={createHashHistory()}>
                    <Home default path="/" />
                    <Hello path="/hello" />
                    <About path="/about" />
                </Router>
            </div>
        );
    }
}

render(<Index />, document.body);
