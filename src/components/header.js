import { h, render, Component } from "preact";
import { route } from "preact-router";
import { Link } from "preact-router/match";

import Toolbar from "preact-material-components/Toolbar";
import Drawer from "preact-material-components/Drawer";
import Menu from "preact-material-components/Menu";

import DrawerList from "~/components/drawerList";

import "preact-material-components/Toolbar/style.css";
import "preact-material-components/Menu/style.css";
import "preact-material-components/Drawer/style.css";

export default class Header extends Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
    this._onClickMenu = this._onClickMenu.bind(this);
    this.state = {
      drawerOpened: false
    };
  }
  _routeFromLink(node) {
    // only valid elements
    if (!node || !node.getAttribute) return;

    let href = node.getAttribute("href"),
      target = node.getAttribute("target");

    // ignore links with targets and non-path URLs
    if (!href || !href.match(/^\//g) || (target && !target.match(/^_?self$/i)))
      return;

    // attempt to route, if no match simply cede control to browser
    return route(href);
  }
  _onClick(e) {
    this.setState({
      drawerOpened: false
    });
    this._handleLinkClick(e);
  }
  _onClickMenu(e) {
    this.menu.MDComponent.open = false;
    this._handleLinkClick(e);
  }

  _handleLinkClick(e) {
    // eslint-disable-next-line eqeqeq
    if (e.button == 0) {
      this._routeFromLink(e.currentTarget || e.target || this);
      return this._prevent(e);
    }
  }

  _prevent(e) {
    if (e) {
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      if (e.stopPropagation) e.stopPropagation();
      e.preventDefault();
    }
    return false;
  }
  render() {
    return (
      <Toolbar fixed={true}>
        <Toolbar.Row>
          <Toolbar.Section align-start={true}>
            <Toolbar.Icon
              onClick={() => {
                this.setState({
                  drawerOpened: !this.state.drawerOpened
                });
              }}
            >
              menu
            </Toolbar.Icon>
            <Drawer.TemporaryDrawer
              open={this.state.drawerOpened}
              onClose={() => {
                this.setState({
                  drawerOpened: false
                });
              }}
            >
              {/* <Drawer.TemporaryDrawerHeader className="mdc-theme--primary-bg">
                                Components
                            </Drawer.TemporaryDrawerHeader> */}
              <Drawer.TemporaryDrawerContent>
                <DrawerList onClick={this._onClick} />
              </Drawer.TemporaryDrawerContent>
            </Drawer.TemporaryDrawer>
            <Toolbar.Title>
              <Link href="/#" class="toolbarTitleLink">
                keemor.github.io
              </Link>
            </Toolbar.Title>
          </Toolbar.Section>

          <Toolbar.Section align-end={true}>
            <Menu.Anchor>
              <Toolbar.Icon
                menu={true}
                onClick={e => {
                  this.menu.MDComponent.open = true;
                }}
              >
                more_vert
              </Toolbar.Icon>
              <Menu
                ref={menu => {
                  this.menu = menu;
                }}
              >
                <Link
                  href="/about"
                  class="mdc-list-item"
                  onClick={this._onClickMenu}
                >
                  <Menu.Item>About</Menu.Item>
                </Link>
              </Menu>
            </Menu.Anchor>
          </Toolbar.Section>
        </Toolbar.Row>
      </Toolbar>
    );
  }
}
