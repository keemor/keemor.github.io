import { h, render, Component } from "preact";
import { Link } from "preact-router/match";
import List from "preact-material-components/List";

import "preact-material-components/List/style.css";

export default class DrawerList extends Component {
  render({ onClick }) {
    const links = [
      {
        href: "/",
        icon: "home",
        name: "Home"
      },
      {
        href: "/hello",
        icon: "code",
        name: "Hello"
      },
      {
        href: "/code/router",
        icon: "code",
        name: "Router"
      },
      {
        href: "/code/offline",
        icon: "code",
        name: "Offline"
      },
      {
        href: "/code/highlight",
        icon: "code",
        name: "Highlight.js"
      },
      {
        href: "/code/whereami",
        icon: "code",
        name: "Where am I?"
      },
      {
        href: "/code/asyncawait",
        icon: "code",
        name: "Async/await"
      }
    ];

    return (
      <List>
        {links.map(link => {
          return (
            <Link href={link.href} class="mdc-list-item" onClick={onClick}>
              <List.LinkItem>
                <List.ItemIcon>{link.icon}</List.ItemIcon>
                {link.name}
              </List.LinkItem>
            </Link>
          );
        })}
      </List>
    );
  }
}
