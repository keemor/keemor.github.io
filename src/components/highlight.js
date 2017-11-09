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
        class={`hljs lang-${hLang}`}
        dangerouslySetInnerHTML={{ __html: highlighted.value }}
      />
    </pre>
  );
};
