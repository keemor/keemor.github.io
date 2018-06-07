import { h, render, Component } from 'preact';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { createHashHistory } from 'history';
import * as runtime from 'offline-plugin/runtime';

import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './style/style.scss';
import 'preact/debug';

import Header from './components/header';

import Home from './route/home';
import About from './route/about';

//import Hello from './route/code/hello';
// import RouterCode from './route/code/router';
// import OfflineCode from './route/code/offline';
// import HighlightCode from './route/code/highlight';
// import WhereAmI from './route/code/whereami';
// import AsyncAwait from './route/code/asyncawait';

class Index extends Component {
    constructor() {
        super();

        runtime.install({
            onUpdating: () => {
                console.log('SW Event:', 'onUpdating');
            },
            onUpdateReady: () => {
                console.log('SW Event:', 'onUpdateReady');
                // Tells to new SW to take control immediately
                runtime.applyUpdate();
            },
            onUpdated: () => {
                console.log('SW Event:', 'onUpdated');
                // Reload the webpage to load into the new version
                window.location.reload();
            },

            onUpdateFailed: () => {
                console.log('SW Event:', 'onUpdateFailed');
            }
        });
    }
    logPageView() {
        window.dataLayer.push({ event: window.location.hash });
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
                        <About path="/about" />
                        <AsyncRoute path="/code/hello" getComponent={this.getComponent} />
                        <AsyncRoute path="/code/router" getComponent={this.getComponent} />
                        <AsyncRoute path="/code/offline" getComponent={this.getComponent} />
                        <AsyncRoute path="/code/highlight" getComponent={this.getComponent} />
                        <AsyncRoute path="/code/whereami" getComponent={this.getComponent} />
                        <AsyncRoute path="/code/asyncawait" getComponent={this.getComponent} />
                    </Router>
                </div>
            </div>
        );
    }
}

render(<Index />, document.body);
