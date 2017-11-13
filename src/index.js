import { h, render, Component } from "preact";
import { Router } from "preact-router";
import { createHashHistory } from "history";
import * as runtime from "offline-plugin/runtime";

import "preact-material-components/Typography/style.css";
import "preact-material-components/Theme/style.css";
import "./style/style.scss";
import "preact/debug";

import Header from "./components/header";

import Home from "./route/home";
import About from "./route/about";

import Hello from "./route/code/hello";
import RouterCode from "./route/code/router";
import OfflineCode from "./route/code/offline";
import HighlightCode from "./route/code/highlight";
import WhereAmI from "./route/code/whereami";

class Index extends Component {
  constructor(props) {
    super(props);
    runtime.install({
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
            <About path="/about" />
            <Hello path="/code/hello" />
            <RouterCode path="/code/router" />
            <OfflineCode path="/code/offline" />
            <HighlightCode path="/code/highlight" />
            <WhereAmI path="/code/whereami" />
          </Router>
        </div>
      </div>
    );
  }
}

render(<Index />, document.body);
