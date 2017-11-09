import { h, render, Component } from "preact";
import Card from "preact-material-components/Card";

import HighLightJS from "~/components/highlight";

export default class HighlightCode extends Component {
  render(props, { text }) {
    const demo = `
import { h } from "preact";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai-sublime.css";

const LANGUAGES = { javascript };
Object.keys(LANGUAGES).forEach(key =>
  hljs.registerLanguage(key, LANGUAGES[key])
);

export default ({ code }) => {
  let text = code.replace(/(^\s+|\s+$)/g, ""),
    highlighted = hljs.highlightAuto(text, Object.keys(LANGUAGES)),
    hLang = highlighted.language;
  return (
    <pre class="highlight">
      <code
        class={\`hljs lang-\${hLang}\`}
        dangerouslySetInnerHTML={{ __html: highlighted.value }}
      />
    </pre>
  );
};`;

    return (
      <Card>
        <Card.Primary>
          <Card.Title>
            Example of using{" "}
            <a href="https://github.com/isagalaev/highlight.js/">
              highlight.js
            </a>{" "}
            based on preact-material-components{" "}
            <a href="https://github.com/prateekbh/preact-material-components/blob/master/docs/src/components/code-block/index.js">
              code-block
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
