import { h, render, Component } from "preact";

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "type" };
        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        this.setState({ text: e.target.value });
    }

    render(props, { text }) {
        return (
            <div>
                <h2>
                    <label for="hello">Hello</label>: <input id="hello" value={text} onInput={this.onInput} />
                </h2>

                <h2>
                    Hello: <span>{text} </span>
                </h2>
            </div>
        );
    }
}
