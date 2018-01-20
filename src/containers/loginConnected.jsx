import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "./login.jsx";

import { connectUser, logoutUser } from "../actions";

const mapStateToProps = (state, props) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ connectUser, logoutUser }, dispatch);

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConnectedLogin;
