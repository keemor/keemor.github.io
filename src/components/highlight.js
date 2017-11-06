import { h, render, Component } from "preact";
import { HighLight, THEME } from "preact-highlight";

export default class HighLightJS extends Component {
    render({ code }) {
        return <HighLight language="JavaScript" className="cmp-high-light" code={code} theme={THEME.monokaiSublime} />;
    }
}
