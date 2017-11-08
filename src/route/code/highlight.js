import { h, render, Component } from "preact";
import Card from "preact-material-components/Card";

import HighLightJS from "~/components/highlight";

export default class HighlightCode extends Component {
  render(props, { text }) {
    const demo = `
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
    }, 25);
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
}`;

    return (
      <Card>
        <Card.Primary>
          <Card.Title>
            Example of using{" "}
            <a href="https://github.com/isagalaev/highlight.js/">
              highlight.js
            </a>
          </Card.Title>
        </Card.Primary>
        <Card.Media>
          <HighLightJS code={demo} />
        </Card.Media>
      </Card>
    );
  }
}
