import { h, render, Component } from "preact";

export default class Home extends Component {
    render(props, { text }) {
        return (
            <div>
                <h2>Home of keemor's pwa</h2>
            </div>
        );
    }
}
