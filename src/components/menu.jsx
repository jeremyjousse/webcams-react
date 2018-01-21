// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Icon, Menu } from "semantic-ui-react";

import styles from "./../assets/css/menu.css";

const PageMenu = ({ authentication, login, logout }) => (
  <Menu inverted className="fixed">
    <Container className="ui">
      <Link to="/">
        <Menu.Item name="home" />
      </Link>
      <Menu.Item name="account">
        {authentication.user.uid ? (
          <a href="javascript:void(0)" onClick={logout}>
            <Icon name="user" /> Log Out
          </a>
        ) : (
          <a href="javascript:void(0)" onClick={login}>
            <Icon name="user" /> Log In
          </a>
        )}
      </Menu.Item>
    </Container>
  </Menu>
);

export default PageMenu;
// export default class PageMenu extends Component {
//   render() {
//     console.log(this.props.authentication);
//     return (
//       <Menu inverted className="fixed">
//         <Container className="ui">
//           <Link to="/">
//             <Menu.Item name="home" />
//           </Link>
//           <Menu.Item name="account">
//             <Link to="/login">
//               <Icon name="user" />
//             </Link>
//           </Menu.Item>
//         </Container>
//       </Menu>
//     );
//   }
// }
