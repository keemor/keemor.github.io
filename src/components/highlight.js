import { h, render, Component } from "preact";

import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai-sublime.css";

export default class HighLightJS extends Component {
    componentDidMount() {
        hljs.registerLanguage("javascript", javascript);
        //Wait until everything is ready to avoid duplication of tag <code></code>
        window.setTimeout(() => {
            hljs.highlightBlock(this.element);
        }, 0);
    }

    render({ code }) {
        return (
            <pre
                ref={ref => {
                    this.element = ref;
                }}
            >
                <code>{code}</code>
            </pre>
        );
    }
}
