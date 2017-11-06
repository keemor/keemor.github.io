import { h, render, Component } from "preact";
import HighLightJS from "~/components/highlight";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";

export default class Home extends Component {
    render(props, { text }) {
        const demoDev = `npm install 
npm start`;

        const demoProd = `npm run build`;

        return (
            <Card>
                <Card.Primary>
                    <Card.Title large={true}>Preact Progressive Web App Boilerplate 2017</Card.Title>
                </Card.Primary>
                <Card.Media>
                    The smallest Preact Progressive Web App stack with:
                    <ul>
                        <li>
                            <a href="https://github.com/developit/preact-router">preact router</a> with{" "}
                            <a href="https://github.com/ReactTraining/history">history</a>
                        </li>
                        <li>
                            <a href="https://github.com/prateekbh/preact-material-components">
                                preact material components
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/babel/babel-preset-env">babel-preset-env</a> for ES6 & JSX
                            support
                        </li>
                        <li>
                            <a href="https://github.com/kentcdodds/webpack-config-utils">webpack-config-utils</a> in
                            single <i>webpack.config.babel.js</i> for production and development
                        </li>
                        <li>
                            <a href="https://github.com/NekR/offline-plugin">offline-plugin</a> for serving files when
                            offline
                        </li>
                        <li>
                            <a href="https://github.com/webpack/webpack-dev-server">webpack dev server</a> included for
                            local development
                        </li>
                        <li>SASS support</li>
                        <li>Compatible with IE11 and higher</li>
                        <li>
                            100% in <a href="https://developers.google.com/web/tools/lighthouse/">
                                Lighthouse Audit
                            </a>{" "}
                            :)
                        </li>
                    </ul>
                    <p>
                        Source code{" "}
                        <a href="https://github.com/keemor/keemor.github.io">
                            https://github.com/keemor/keemor.github.io
                        </a>
                    </p>
                    Local development
                    <HighLightJS code={demoDev} />
                    Production version
                    <HighLightJS code={demoProd} />
                </Card.Media>
            </Card>
        );
    }
}
