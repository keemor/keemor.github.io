import { h, render, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "../style/style.scss";

export default class Home extends Component {
    render(props, { text }) {
        return (
            <Card>
                <Card.Primary>
                    <Card.Title className="mdc-card__title--large">
                        Boilerplate for Preact Progressive Web App
                    </Card.Title>
                </Card.Primary>
                <Card.Media>
                    The smallest Preact Progressive Web App stack with:
                    <ul>
                        <li>ES6 & JSX supported by webpack </li>
                        <li>
                            <a href="https://github.com/developit/preact-router">
                                preact router
                            </a>{" "}
                            with history
                        </li>
                        <li>
                            <a href="https://github.com/prateekbh/preact-material-components">
                                preact material components
                            </a>
                        </li>
                        <li>
                            webpack dev server included for local development
                        </li>
                        <li>service worker for serving files when offline</li>
                        <li>SASS support</li>
                        <li>100% in Lighthouse Audit :)</li>
                    </ul>
                    <p>
                        Demo{" "}
                        <a href="https://keemor.github.io/">
                            https://keemor.github.io
                        </a>
                    </p>
                    <p>
                        Source code{" "}
                        <a href="https://github.com/keemor/keemor.github.io">
                            https://github.com/keemor/keemor.github.io
                        </a>
                    </p>
                    Local development
                    <pre>
                        npm install<br />npm start
                    </pre>
                    Production version
                    <pre>npm run build</pre>
                </Card.Media>
            </Card>
        );
    }
}
