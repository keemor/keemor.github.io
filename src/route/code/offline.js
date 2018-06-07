import { h, render, Component } from 'preact';
import Card from 'preact-material-components/Card';

import HighLightJS from '~/components/highlight';

export default class OfflineCode extends Component {
    render(props, { text }) {
        const demo = `
import { h, render, Component } from "preact";
import * as runtime from "offline-plugin/runtime";

import Header from "./components/header";

class Index extends Component {
  constructor(props) {
    super(props);
    runtime.install({
      onUpdating: () => {
        console.log("SW Event:", "onUpdating");
      },
      onUpdateReady: () => {
        console.log("SW Event:", "onUpdateReady");
        // Tells to new SW to take control immediately
        runtime.applyUpdate();
      },
      onUpdated: () => {
        console.log("SW Event:", "onUpdated");
        // Reload the webpage to load into the new version
        window.location.reload();
      },

      onUpdateFailed: () => {
        console.log("SW Event:", "onUpdateFailed");
      }
    });
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

render(<Index />, document.body);`;

        return (
            <Card>
                <div>
                    <h3>
                        Example of using <a href="https://github.com/NekR/offline-plugin">offline-plugin</a>
                    </h3>
                </div>
                <Card.Media>
                    <HighLightJS code={demo} />
                </Card.Media>
            </Card>
        );
    }
}
