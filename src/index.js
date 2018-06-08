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

    getHome(url, cb, props) {
        const componentOrPromise = System.import('./route/home');
        if (componentOrPromise.then) {
            // for client
            return componentOrPromise.then(module => module.default);
        } else if (componentOrPromise.default) {
            // for node
            cb({ component: componentOrPromise.default });
        }
        //return System.import('./route/home').then(module => module.default);
    }

    getComponent(url, cb, props) {
        return System.import('./route' + url).then(module => module.default);
    }
    getLoadingComponent(route) {
        return <div>loading...</div>;
        // if (this.state.ssrShown) {
        //     return <div>loading...</div>;
        // } else {
        //     return <div dangerouslySetInnerHTML={{ __html: this.ssrText }} />;
        // }
    }

    // componentWillMount() {
    //     if (typeof document !== 'undefined') {
    //         this.ssrText = document.querySelector('.content').innerHTML;
    //     }
    // }
    render() {
        return (
            <div>
                <Header />
                <div class="marginTop content">
                    <Router history={createHashHistory()} onChange={this.logPageView}>
                        <AsyncRoute loading={this.getLoadingComponent} default path="/" getComponent={this.getHome} />
                        <AsyncRoute path="/about" getComponent={this.getComponent} />
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
