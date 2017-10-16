import { h, render, Component } from "preact";

class Hello extends Component {
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
                    Hello: <input value={text} onInput={this.onInput} />
                </h2>

                <h2>
                    Hello: <span>{text} </span>
                </h2>
            </div>
        );
    }
}

render(<Hello />, document.body);
