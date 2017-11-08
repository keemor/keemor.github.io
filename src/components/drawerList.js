import { h, render, Component } from "preact";
import { Link } from "preact-router/match";
import List from "preact-material-components/List";

import "preact-material-components/List/style.css";

export default class DrawerList extends Component {
  render({ onClick }) {
    return (
      <List>
        <Link href="/" class="mdc-list-item" onClick={onClick}>
          <List.LinkItem>
            <List.ItemIcon>home</List.ItemIcon>
            Home
          </List.LinkItem>
        </Link>

        <Link href="/hello" class="mdc-list-item" onClick={onClick}>
          <List.LinkItem>
            <List.ItemIcon>code</List.ItemIcon>
            Hello
          </List.LinkItem>
        </Link>

        <Link href="/code/router" class="mdc-list-item" onClick={onClick}>
          <List.LinkItem>
            <List.ItemIcon>code</List.ItemIcon>
            Router
          </List.LinkItem>
        </Link>
        <Link href="/code/offline" class="mdc-list-item" onClick={onClick}>
          <List.LinkItem>
            <List.ItemIcon>code</List.ItemIcon>
            Offline
          </List.LinkItem>
        </Link>
        <Link href="/code/highlight" class="mdc-list-item" onClick={onClick}>
          <List.LinkItem>
            <List.ItemIcon>code</List.ItemIcon>
            Highlight.js
          </List.LinkItem>
        </Link>
      </List>
    );
  }
}
