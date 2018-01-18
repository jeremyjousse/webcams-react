// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Icon, Menu } from "semantic-ui-react";

import styles from "./../assets/css/menu.css";

export default class PageMenu extends Component {
  render() {
    return (
      <Menu inverted className="fixed">
        <Container className="ui">
          <Link to="/">
            <Menu.Item name="home" />
          </Link>
          <Menu.Item name="account">
            <Link to="/login">
              <Icon name="user" />
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
      // <div class="ui fixed inverted menu">
      //   <div class="ui container">
      //     <a href="#" class="header item">
      //       <img class="logo" src="assets/images/logo.png" />
      //       Project Name
      //     </a>
      //     <a href="#" class="item">
      //       Home
      //     </a>
      //     <div class="ui simple dropdown item">
      //       Dropdown <i class="dropdown icon" />
      //       <div class="menu">
      //         <a class="item" href="#">
      //           Link Item
      //         </a>
      //         <a class="item" href="#">
      //           Link Item
      //         </a>
      //         <div class="divider" />
      //         <div class="header">Header Item</div>
      //         <div class="item">
      //           <i class="dropdown icon" />
      //           Sub Menu
      //           <div class="menu">
      //             <a class="item" href="#">
      //               Link Item
      //             </a>
      //             <a class="item" href="#">
      //               Link Item
      //             </a>
      //           </div>
      //         </div>
      //         <a class="item" href="#">
      //           Link Item
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
